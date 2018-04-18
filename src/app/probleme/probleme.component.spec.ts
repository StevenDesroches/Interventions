import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProblemeComponent } from './probleme.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { ReactiveFormsModule, AbstractControl } from '@angular/forms';
import { validatorCaracter } from '../shared/caracteres-validator';

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
    let errors = {};
    let control = component.problemeForm.controls['prenom'];
    control.setValue('a'.repeat(2));
    errors = control.errors || {};
    expect(errors['longueurMinimum']).toBeFalsy();
 });

  it('Test 2,zone PRÉNOM valide avec 3 caractères', () => {
    let errors = {};
    let control = component.problemeForm.controls['prenom'];
    control.setValue('a'.repeat(3));
    errors = control.errors || {};
    expect(errors['longueurMinimum']).toBeTruthy();
 });

 it('Test 3, zone PRÉNOM valide avec 200 caractères', () => {
  let errors = {};
  let control = component.problemeForm.controls['prenom'];
  control.setValue('a'.repeat(200));
  errors = control.errors || {};
  expect(errors['longueurMinimum']).toBeTruthy();
 });

 it('Test 4, zone PRÉNOM invalide avec aucune valeur', () => {
    let errors = {};
    let control = component.problemeForm.controls['prenom'];
    errors = control.errors || {};
    expect(errors['longueurMinimum']).toBeFalsy();
 });

 it('Test 5, zone PRÉNOM invalide avec un caractère', () => {
    let errors = {};
    let control = component.problemeForm.controls['prenom'];
    control.setValue('a'.repeat(1));
    errors = control.errors || {};
    expect(errors['longueurMinimum']).toBeFalsy();
 });

 it('Test 6, zone PRÉNOM invalide avec 50 espaces', () => {
    let errors = {};
    let control = component.problemeForm.controls['prenom'];
    control.setValue(' '.repeat(50));
    errors = control.errors || {};
    expect(errors['sansEspaces']).toBeFalsy();
 });

 it('Test 7, zone PRÉNOM invalide avec 2 espaces et 1 caractère', () => {
    let errors = {};
    let control = component.problemeForm.controls['prenom'];
    control.setValue(' '.repeat(50));
    errors = control.errors || {};
    expect(errors['sansEspaces']).toBeFalsy();
 });

});
