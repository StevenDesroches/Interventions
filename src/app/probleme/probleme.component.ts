import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { validatorCaracter } from '../shared/caracteres-validator';

@Component({
  selector: 'Inter-probleme',
  templateUrl: './probleme.component.html',
  styleUrls: ['./probleme.component.css']
})
export class ProblemeComponent implements OnInit {
  problemeForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.problemeForm = this.fb.group({
      prenom: ['',Validators.compose([validatorCaracter.longueurMinimum(3), Validators.maxLength(200), validatorCaracter.sansEspaces])]
    });
  }

}
