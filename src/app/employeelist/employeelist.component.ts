import { Component, OnInit } from '@angular/core';
import { EmployeeserviceService } from '../employeeservice.service';

@Component({
  selector: 'app-employeelist',
  template: `
    <h2>this is employee list</h2>
    <h2>{{errorMsg}}</h2>
   <ul *ngFor="let employee of employess">
    <li>
     {{employee.Name}}
    </li>
   </ul>
  `,
  styleUrls: ['./employeelist.component.css']
})
export class EmployeelistComponent implements OnInit {

  public employess = [];
  public errorMsg;
  constructor(private _employeeseervice : EmployeeserviceService ) {}


  ngOnInit() {

    //this.employess = this._employeeseervice.getEmployees();
    this._employeeseervice.getEmployees().subscribe(data => this.employess = data,
                                                    error =>this.errorMsg = error );
  }

}
