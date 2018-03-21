import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'Inter-probleme',
  templateUrl: './probleme.component.html',
  styleUrls: ['./probleme.component.css']
})
export class ProblemeComponent implements OnInit {
  produitForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.produitForm = this.fb.group({
      prenom: ['',Validators.compose([Validators.minLength(3), Validators.maxLength(200), Validators.required])]
    });
  }

}
