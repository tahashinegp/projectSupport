import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Idepartments } from './departmentinterface';

@Injectable({
  providedIn: 'root'
})
export class DepeartmentService {

  private _url : string = '/assets/data/department.json';
   getDepartments(){
    let jsonObj: any = JSON.parse(this._url);
    let departmentsobj: Idepartments =<Idepartments>jsonObj;
    console.log(departmentsobj);

   }

  constructor() { }
}
