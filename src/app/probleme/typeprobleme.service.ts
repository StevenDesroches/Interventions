import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { ITypeProbleme } from './typeprobleme';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

@Injectable()
export class TypeproblemeService {
  private baseUrl = 'api/typesprobleme';

  constructor(private _http: HttpClient) { }

  obtenirTypeProbleme(): Observable<ITypeProbleme[]> {
    return this._http.get<ITypeProbleme[]>(this.baseUrl)
      .do(data=>console.log('obtenirTypeProbleme: ' + JSON.stringify(data)))
      .catch(this.handleError);
  }

  private handleError(err: HttpErrorResponse) {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    console.error(err.error);
    return Observable.throw(err.message);
  }
}
