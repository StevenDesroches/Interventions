import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { validatorCaracter } from '../shared/caracteres-validator';
import { TypeproblemeService } from './typeprobleme.service';
import { ITypeProbleme } from './typeprobleme';

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
      noTypeProbleme: ['']
    });

    this.typeProbleme.obtenirTypeProbleme()
    .subscribe(cat => this.lesTypesProblemes = cat,
                error => this.errorMessage = <any>error);
  }

}
