import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { validatorCaracter } from '../shared/caracteres-validator';
import { TypeproblemeService } from './typeprobleme.service';
import { ITypeProbleme } from './typeprobleme';
import { emailMatcherValidator } from '../shared/emailMatcher-validator';

@Component({
  selector: 'Inter-probleme',
  templateUrl: './probleme.component.html',
  styleUrls: ['./probleme.component.css']
})
export class ProblemeComponent implements OnInit {
  problemeForm: FormGroup;
  lesTypesProblemes: ITypeProbleme[];
  errorMessage: string;

  constructor(private fb: FormBuilder, private typeProbleme: TypeproblemeService) { }

  ngOnInit() {
    this.problemeForm = this.fb.group({
      prenom: ['',Validators.compose([validatorCaracter.longueurMinimum(3), Validators.maxLength(200), validatorCaracter.sansEspaces, Validators.required])],
      nom: ['',Validators.compose([validatorCaracter.longueurMinimum(3), Validators.maxLength(200), validatorCaracter.sansEspaces, Validators.required])],
      noTypeProbleme: ['', Validators.required],
      courrielGroup: this.fb.group({
        courriel: [{value: '', disabled: true}],
        courrielConfirmation: [{value: '', disabled: true}]
      }),
      telephone: [{value: '', disabled: true}]
    });

    this.typeProbleme.obtenirTypeProbleme()
    .subscribe(cat => this.lesTypesProblemes = cat,
                error => this.errorMessage = <any>error);
  }

  appliquerNotification(notification: string): void {
    const mailControl = this.problemeForm.get('courrielGroup.courriel');
    const mailConfirmControl = this.problemeForm.get('courrielGroup.courrielConfirmation');
    const telephoneControl = this.problemeForm.get('telephone');
    const mailGroupControl = this.problemeForm.get('courrielGroup');

    mailControl.clearValidators();
    mailControl.reset();
    mailControl.disable();

    mailConfirmControl.clearValidators();
    mailConfirmControl.reset();
    mailConfirmControl.disable();

    telephoneControl.clearValidators();
    telephoneControl.reset();
    telephoneControl.disable();

    mailGroupControl.clearValidators();
    mailGroupControl.reset();
    mailGroupControl.disable();

    if (notification === 'CourrielNotification') {
      mailControl.setValidators([Validators.compose([Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+'), Validators.required])]);
      mailControl.enable();
      mailConfirmControl.setValidators([Validators.compose([Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+'), Validators.required])]);
      mailConfirmControl.enable();
      mailGroupControl.setValidators([Validators.compose([emailMatcherValidator.courrielDifferents()])]);
    } else if (notification === 'OuiNotification') {
      mailControl.setValidators([Validators.required]);
      mailControl.enable();
      mailConfirmControl.setValidators([Validators.required],);
      mailConfirmControl.enable();
      telephoneControl.setValidators([Validators.required]);
      telephoneControl.enable();
    }
    mailControl.updateValueAndValidity();
    mailConfirmControl.updateValueAndValidity();
    telephoneControl.updateValueAndValidity();
    mailGroupControl.updateValueAndValidity();
  }

}
