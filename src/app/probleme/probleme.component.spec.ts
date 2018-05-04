import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProblemeComponent } from './probleme.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { ReactiveFormsModule, AbstractControl } from '@angular/forms';
import { validatorCaracter } from '../shared/caracteres-validator';
import { TypeproblemeService } from './typeprobleme.service';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';

describe('ProblemeComponent', () => {
  let component: ProblemeComponent;
  let fixture: ComponentFixture<ProblemeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProblemeComponent ],
      imports: [AngularFontAwesomeModule, ReactiveFormsModule, HttpClientModule, HttpModule],
      providers:[TypeproblemeService]
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
    expect(errors['longueurMinimum']).toBeTruthy();
 });

  it('Test 2,zone PRÉNOM valide avec 3 caractères', () => {
    let errors = {};
    let control = component.problemeForm.controls['prenom'];
    control.setValue('a'.repeat(3));
    errors = control.errors || {};
    expect(errors['longueurMinimum']).toBeUndefined();
 });

 it('Test 3, zone PRÉNOM valide avec 200 caractères', () => {
  let errors = {};
  let control = component.problemeForm.controls['prenom'];
  control.setValue('a'.repeat(200));
  errors = control.errors || {};
  expect(errors['longueurMinimum']).toBeUndefined();
 });

 it('Test 4, zone PRÉNOM invalide avec aucune valeur', () => {
    let errors = {};
    let control = component.problemeForm.controls['prenom'];
    errors = control.errors || {};
    expect(errors['longueurMinimum']).toBeTruthy();
 });

 it('Test 5, zone PRÉNOM invalide avec un caractère', () => {
    let errors = {};
    let control = component.problemeForm.controls['prenom'];
    control.setValue('a'.repeat(1));
    errors = control.errors || {};
    expect(errors['longueurMinimum']).toBeTruthy();
 });

 it('Test 6, zone PRÉNOM invalide avec 50 espaces', () => {
    let errors = {};
    let control = component.problemeForm.controls['prenom'];
    control.setValue(' '.repeat(50));
    errors = control.errors || {};
    expect(errors['sansEspaces']).toBe(true);
 });

 it('Test 7, zone PRÉNOM invalide avec 2 espaces et 1 caractère', () => {
    let errors = {};
    let control = component.problemeForm.controls['prenom'];
    control.setValue(' f ');
    errors = control.errors || {};
    expect(errors['longueurMinimum']).toBe(true);
 });

  it('Zone TELEPHONE est désactivée quand ne pas me notifier', () => {
    let errors = {};
    component.appliquerNotification('NonNotification');
    let zone = component.problemeForm.controls['telephone'];
    expect(zone.status).toEqual('DISABLED');
  });

  it('Zone TELEPHONE est vide quand ne pas me notifier', () => {
    let errors = {};
    component.appliquerNotification('NonNotification');
    let zone = component.problemeForm.controls['telephone'];
    expect(zone.value).toBeNull();
  });

  it('Zone ADRESSE COURRIEL est désactivée quand ne pas me notifier', () => {
    let errors = {};
    component.appliquerNotification('NonNotification');
    let zone = component.problemeForm.get('courrielGroup.courriel');
    expect(zone.status).toEqual('DISABLED');
  });

  it('Zone CONFIRMER COURRIEL est désactivée quand ne pas me notifier', () => {
    let errors = {};
    component.appliquerNotification('NonNotification');
    let zone = component.problemeForm.get('courrielGroup.courrielConfirmation');
    expect(zone.status).toEqual('DISABLED');
  });

  it('Zone TELEPHONE est désactivée quand notifier par courriel', () => {
    let errors = {};
    component.appliquerNotification('CourrielNotification');
    let zone = component.problemeForm.controls['telephone'];
    expect(zone.status).toEqual('DISABLED');
  });

  it('Zone ADRESSE COURRIEL est activée quand notifier par courriel', () => {
    let errors = {};
    component.appliquerNotification('CourrielNotification');
    let zone = component.problemeForm.get('courrielGroup.courriel');
    expect(zone.status).toBeTruthy();
  });

  it('Zone CONFIRMER COURRIEL est activée quand notifier par courriel ', () => {
    let errors = {};
    component.appliquerNotification('CourrielNotification');
    let zone = component.problemeForm.get('courrielGroup.courrielConfirmation');
    expect(zone.status).toBeTruthy();
  });

  it('Zone CONFIRMER COURRIEL est invalide sans valeur quand notifier par courriel', () => {
    let errors = {};
    component.appliquerNotification('CourrielNotification');
    let zone = component.problemeForm.get('courrielGroup.courrielConfirmation');
    zone.setValue('');
    expect(zone.value).toBeFalsy();
  });

  it('Zone ADRESSE COURRIEL est invalide avec un format non conforme', () => {
    let errors = {};
    component.appliquerNotification('CourrielNotification');
    let zone = component.problemeForm.get('courrielGroup.courriel');
    zone.setValue('asdasda');
    errors = zone.errors || {};
    expect(!errors['pattern']).toBeFalsy();
  });

  it('Zone ADRESSE COURRIEL sans valeur et Zone CONFIRMER COURRIEL avec valeur valide retourne null', () => {
    component.appliquerNotification('CourrielNotification');
    let errors = {};

    let courrielConfirm = component.problemeForm.get('courrielGroup.courrielConfirmation');
    let courriel = component.problemeForm.get('courrielGroup.courriel');
    courrielConfirm.setValue('valide@f.com');
    courriel.setValue('');

    let groupe = component.problemeForm.get('courrielGroup');
    errors = groupe.errors || {};
    expect(errors['match']).toBeUndefined();
  });

  it('Zone ADRESSE COURRIEL avec valeur valide et Zone CONFIRMER COURRIEL sans valeur retourne null', () => {
    component.appliquerNotification('CourrielNotification');
    let errors = {};

    let courrielConfirm = component.problemeForm.get('courrielGroup.courrielConfirmation');
    let courriel = component.problemeForm.get('courrielGroup.courriel');
    courrielConfirm.setValue("");
    courriel.setValue("valide@f.com");

    let groupe = component.problemeForm.get('courrielGroup');
    errors = groupe.errors || {};
    expect(errors['match']).toBeUndefined();
  });

  it('Zones ADRESSE COURRIEL et CONFIRMER COURRIEL sont invalides si les valeurs sont différentes quand notifier par courriel', () => {
    component.appliquerNotification('CourrielNotification');
    let errors = {};

    let courrielConfirm = component.problemeForm.get('courrielGroup.courrielConfirmation');
    let courriel = component.problemeForm.get('courrielGroup.courriel');
    courrielConfirm.setValue("a2@f.com");
    courriel.setValue("a@f.com");

    let groupe = component.problemeForm.get('courrielGroup');
    errors = groupe.errors || {};
    expect(errors['match']).toBeTruthy();
  });

  it('Zones ADRESSE COURRIEL et CONFIRMER COURRIEL sont valides si les valeurs sont identiques quand notifier par courriel', () => {
    component.appliquerNotification('CourrielNotification');
    let errors = {};
    
    let courrielConfirm = component.problemeForm.get('courrielGroup.courrielConfirmation');
    let courriel = component.problemeForm.get('courrielGroup.courriel');
    courrielConfirm.setValue("a1@f.com");
    courriel.setValue("a1@f.com");

    let groupe = component.problemeForm.get('courrielGroup');
    errors = groupe.errors || {};
    expect(errors['match']).toBeUndefined();
  });
  //
  //Tp14
  //

  it('Zone TELEPHONE est activée quand notifier par messagerie texte', () => {
    component.appliquerNotification('textNotification');
    let telephone = component.problemeForm.get('telephone');
    expect(telephone.status).toEqual("INVALID");
  });

  it('Zone ADRESSE COURRIEL est désactivée quand notifier par messagerie texte', () => {
    component.appliquerNotification('textNotification');
    let courriel = component.problemeForm.get('courrielGroup.courriel');
    expect(courriel.status).toEqual("DISABLED");
  });

  it('Zone CONFIRMER COURRIEL est désactivée quand notifier par messagerie texte', () => {
    component.appliquerNotification('textNotification');
    let courrielConfirm = component.problemeForm.get('courrielGroup.courrielConfirmation');
    expect(courrielConfirm.status).toEqual("DISABLED");
  });

  it('Zone TELEPHONE est invalide sans valeur quand notifier par messagerie texte', () => {
    component.appliquerNotification('textNotification');
    let errors = {};

    let telephone = component.problemeForm.get('telephone');
    telephone.setValue("");

    errors = telephone.errors || {};
    expect(errors["required"]).toBeTruthy();
  });

  it('Zone TELEPHONE est invalide avec des caractères non-numériques quand notifier par messagerie texte', () => {
    component.appliquerNotification('textNotification');
    let errors = {};

    let telephone = component.problemeForm.get('telephone');
    telephone.setValue("qwertyuiop");

    errors = telephone.errors || {};
    expect(errors["pattern"]).toBeTruthy();
  });

  it('Zone TELEPHONE est invalide avec 9 chiffres consécutifs quand notifier par messagerie texte', () => {
    component.appliquerNotification('textNotification');
    let errors = {};

    let telephone = component.problemeForm.get('telephone');
    telephone.setValue("9".repeat(9));

    errors = telephone.errors || {};
    expect(errors["minlength"]).toBeTruthy();
  });

  it('Zone TELEPHONE est invalide avec 11 chiffres consécutifs quand notifier par messagerie texte', () => {
    component.appliquerNotification('textNotification');
    let errors = {};

    let telephone = component.problemeForm.get('telephone');
    telephone.setValue("9".repeat(11));

    errors = telephone.errors || {};
    expect(errors["maxlength"]).toBeTruthy();
  });

  it('Zone TELEPHONE est valide avec 10 chiffres consécutifs quand notifier par messagerie texte', () => {
    component.appliquerNotification('textNotification');
    
    let telephone = component.problemeForm.get('telephone');
    telephone.setValue("0".repeat(10));

    expect(telephone.valid).toBeTruthy();
  });
});
