import { validatorCaracter } from "./caracteres-validator";
import { AbstractControl } from "@angular/forms/src/model";

describe('sansEspaces Validator', () => {
    it('une chaîne vide est invalide', () => {
        let control = {value: ""};
        let validator = validatorCaracter.sansEspaces();
        let result = validator(control as AbstractControl);
        expect(result['sansEspaces']).toBe(false);  
    })

    it('une chaîne avec 10 espaces est invalide', () => {
        let control = {value: "          "};
        let validator = validatorCaracter.sansEspaces();
        let result = validator(control as AbstractControl);
        expect(result['sansEspaces']).toBe(false);  
    })

    it('une phrase avec des mots est valide', () => {
        let control = {value: "Ceci est une phrase avec des mots"};
        let validator = validatorCaracter.sansEspaces();
        let result = validator(control as AbstractControl);
        expect(result['sansEspaces']).toBe(true);  
    })

    it('une phrase avec 3 espaces, des mots et ensuite 3 espaces est valide', () => {
        let control = {value: "   desMots   "};
        let validator = validatorCaracter.sansEspaces();
        let result = validator(control as AbstractControl);
        expect(result['sansEspaces']).toBe(true);  
    })
})

describe('longueurMinimum Validator', () => {
    it('une expression avec 1 espace et 2 caractère est invalide.', () => {
        let control = {value: " xx"};
        let validator = validatorCaracter.longueurMinimum(3);
        let result = validator(control as AbstractControl);
        expect(result['longueurMinimum']).toBe(false);  
    })

    it('une expression avec 2 espace et 1 caractère est invalide.', () => {
        let control = {value: "  x"};
        let validator = validatorCaracter.longueurMinimum(3);
        let result = validator(control as AbstractControl);
        expect(result['longueurMinimum']).toBe(false);  
    })

    it('une expression avec 3 espace et 3 caractère est valide.', () => {
        let control = {value: "  J'aime Angular"};
        let validator = validatorCaracter.longueurMinimum(3);
        let result = validator(control as AbstractControl);
        expect(result['longueurMinimum']).toBe(true);  
    })

    it('une phrase avec 5 espaces, 5 caractères et 5 espaces est valide.', () => {
        let control = {value: "  J’aime Angular  "};
        let validator = validatorCaracter.longueurMinimum(3);
        let result = validator(control as AbstractControl);
        expect(result['longueurMinimum']).toBe(true);  
    })
})