import { Component, OnInit } from '@angular/core';
import { EmployeeserviceService } from '../employeeservice.service';

@Component({
  selector: 'app-emplyeedetails',
  template: `
  <h2>this is employee list</h2>
  <ul *ngFor="let employee of employees">
   <li>
    {{employee.Name}}
   </li>
  </ul>
  `,
  styleUrls: ['./emplyeedetails.component.css']
})
export class EmplyeedetailsComponent implements OnInit {

  public employees = [];
  constructor(private _employeeservice : EmployeeserviceService) { }

  ngOnInit() {

    //this.employees=this._employeeservice.getEmployees();
    this._employeeservice.getEmployees().subscribe(data => this.employees = data);
  }

}
