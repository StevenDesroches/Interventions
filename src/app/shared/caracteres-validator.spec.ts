import { sansEspaces } from "./caracteres-validator";
import { AbstractControl } from "@angular/forms/src/model";

describe('sansEspaces Validator', () => {
    it('une chaîne vide est invalide', () => {
        let control = {value: ""};
        let validator = sansEspaces.sansEspaces();
        let result = validator(control as AbstractControl);
        expect(result['sansEspaces']).toBe(false);  
    })

    it('une chaîne avec 10 espaces est invalide', () => {
        let control = {value: "          "};
        let validator = sansEspaces.sansEspaces();
        let result = validator(control as AbstractControl);
        expect(result['sansEspaces']).toBe(false);  
    })

    it('une phrase avec des mots est valide', () => {
        let control = {value: "Ceci est une phrase avec des mots"};
        let validator = sansEspaces.sansEspaces();
        let result = validator(control as AbstractControl);
        expect(result['sansEspaces']).toBe(true);  
    })

    it('une phrase avec 3 espaces, des mots et ensuite 3 espaces est valide', () => {
        let control = {value: "   desMots   "};
        let validator = sansEspaces.sansEspaces();
        let result = validator(control as AbstractControl);
        expect(result['sansEspaces']).toBe(true);  
    })
})