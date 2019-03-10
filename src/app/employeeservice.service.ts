import { Injectable } from '@angular/core';
import { HttpClient ,HttpErrorResponse } from '@angular/common/http';
import { IEmployee } from './employee';
import { Observable, throwError} from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EmployeeserviceService {
  private _url : string = '/assets/data/employees.json';
  getEmployees(): Observable<IEmployee []>{
    /*return [
      {"Name":"Tahashin","Position":"AGM","Age":30},
      {"Name":"Sultan","Position":"GM","Age":32},
      {"Name":"Bappi","Position":"QA","Age":37},
      {"Name":"Roman","Position":"CTO","Age":55}
    ];*/
    return this.http.get<IEmployee []>(this._url);




  }

  constructor(private http:HttpClient) {


   }
}
