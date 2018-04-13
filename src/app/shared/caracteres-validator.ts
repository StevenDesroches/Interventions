import { ValidatorFn } from "@angular/forms";
import { AbstractControl } from "@angular/forms/src/model";

export class sansEspaces {
    static sansEspaces(): ValidatorFn{
        return (c: AbstractControl): { [key: string]: boolean } | null => {
            if (c.value.trim() == '') {
                return { 'sansEspaces': false};
            }
            return {'sansEspaces': true};
        };
    }
}