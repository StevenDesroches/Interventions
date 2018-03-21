import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProblemeComponent } from './probleme.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { ReactiveFormsModule } from '@angular/forms';

describe('ProblemeComponent', () => {
  let component: ProblemeComponent;
  let fixture: ComponentFixture<ProblemeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProblemeComponent ],
      imports: [AngularFontAwesomeModule, ReactiveFormsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProblemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
   expect(component).toBeTruthy();
 });

  it('Test 1, zone PRÉNOM invalide avec 2 caractères', () => {
    let prenom = component.produitForm.controls['prenom'];
    prenom.setValue('a'.repeat(2));
    expect(prenom.valid).toBeFalsy();
 });

  it('Test 2,zone PRÉNOM valide avec 3 caractères', () => {
    let prenom = component.produitForm.controls['prenom'];
    prenom.setValue('a'.repeat(3));
    expect(prenom.valid).toBeTruthy();
 });

 it('Test 3, zone PRÉNOM valide avec 200 caractères', () => {
  let prenom = component.produitForm.controls['prenom'];
  prenom.setValue('a'.repeat(200));
  expect(prenom.valid).toBeTruthy();
 });

 it('Test 4, zone PRÉNOM invalide avec aucune valeur', () => {
    let errors = {};
    let prenom = component.produitForm.controls['prenom'];
    prenom.setValue('a'.repeat(0));
    errors = prenom.errors || {};
    expect(errors['required']).toBeTruthy();
 });

 it('Test 5, zone PRÉNOM invalide avec un caractère', () => {
    let errors = {};
    let prenom = component.produitForm.controls['prenom'];
    prenom.setValue('a'.repeat(1));
    errors = prenom.errors || {};
    expect(errors['minlength']).toBeTruthy();
 });

 it('Test 6, zone PRÉNOM valide avec 50 espaces', () => {
    let prenom = component.produitForm.controls['prenom'];
    prenom.setValue(' '.repeat(50));
    expect(prenom.valid).toBeTruthy();
 });

 it('Test 7, zone PRÉNOM valide avec 2 espaces et 1 caractère', () => {
    let prenom = component.produitForm.controls['prenom'];
    prenom.setValue('  a');
    expect(prenom.valid).toBeTruthy();
 });

});
