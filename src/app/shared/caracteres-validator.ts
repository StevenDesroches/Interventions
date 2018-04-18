import { ValidatorFn } from "@angular/forms";
import { AbstractControl } from "@angular/forms/src/model";
import { Validators } from "@angular/forms/src/validators";

export class validatorCaracter {
    static sansEspaces(): ValidatorFn{
        return (c: AbstractControl): { [key: string]: boolean } | null => {
            if (c.value.trim() == '') {
                return { 'sansEspaces': false};
            }
            return {'sansEspaces': true};
        };
    }

    static longueurMinimum(min: number): ValidatorFn{
        return (c: AbstractControl): {[key: string]: boolean} | null => {
            if (c.value.trim().length < min) {
                return { 'longueurMinimum': false};
            }
            return {'longueurMinimum': true};
        };
    }
}