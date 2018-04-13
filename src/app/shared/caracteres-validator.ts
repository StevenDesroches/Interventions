import { ValidatorFn } from "@angular/forms";

export class sansEspaces {
    static sansEspaces(): ValidatorFn{
        return (): { [key: string]: boolean } | null => {
            return {'sansEspaces': true};
        };
    }
}