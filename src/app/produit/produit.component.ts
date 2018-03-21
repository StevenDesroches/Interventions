import { Component, OnInit } from '@angular/core';
// import { FormBuilder } from '@angular/forms/src/form_builder';
// import { Validators } from '@angular/forms/src/validators';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'Inter-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent implements OnInit {
  produitForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.produitForm = this.fb.group({
        nomProduit: ['',[Validators.minLength(5)]]
    });
  }

}
