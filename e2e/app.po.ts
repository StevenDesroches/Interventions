import { browser, by, element, ElementFinder } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/probleme');
  }

  getParagraphText() {
    return element(by.css('Inter-root h5')).getText();
  }

  setChampsValidesScenarioNominal() : void {
    element(by.id('inputPrenom')).sendKeys('Steven Desroches');
    element(by.id('inputNom')).sendKeys('Desroches');    
    // Sélectionner le premier élément dans la zone de liste déroulante
    element(by.id('noTypeProblemeId')).all(by.tagName('option')).get(2).click();      
    // Cliquer sur la première option du bouton radio
    element.all(by.id('notificationId')).get(0).click();
    
    element(by.id('noUniteId')).sendKeys('1');
    element(by.id('descriptionProblemeId')).sendKeys('Problème entre la chaise et le clavier...');  
  }

  setChampsValidesScenarioAlternatifParMessageTexte() : void {  
    element.all(by.id('notificationId')).get(2).click();
    element(by.id('telephoneId')).sendKeys('5141231234');
  }

  setChampsValidesScenarioAlternatifParCourriel() : void {  
    element.all(by.id('notificationId')).get(1).click();
    element(by.id('courrielId')).sendKeys('aa@bbb.com');
    element(by.id('courrielConfirmationId')).sendKeys('aa@bbb.com');
  }

  boutonSubmit() : ElementFinder { 
    return element(by.buttonText('Sauvegarder'));
  }

  setZoneDescriptionProblemeCaracteresSuffisants() : void {
    element(by.id('descriptionProblemeId')).clear();
    element(by.id('descriptionProblemeId')).sendKeys('Ceci est un message de description valide');
  }

  setZoneDescriptionProblemeCaracteresInsuffisants() : void {
    element(by.id('descriptionProblemeId')).clear();
    element(by.id('descriptionProblemeId')).sendKeys('none');
  }

  obtenirClasseZoneDescriptionProbleme() { 
    return element(by.id('descriptionProblemeId')).getAttribute("class");
  }
}
