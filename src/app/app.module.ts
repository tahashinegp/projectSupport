import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { from } from 'rxjs';
import { EmployeelistComponent } from './employeelist/employeelist.component';
import { EmplyeedetailsComponent } from './emplyeedetails/emplyeedetails.component';
import {EmployeeserviceService} from './employeeservice.service';
import {HttpClientModule} from '@angular/common/http';
import { DepartmentOverviewComponent } from './department-overview/department-overview.component';
import { DepartmentContactComponent } from './department-contact/department-contact.component';
@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    EmployeelistComponent,
    EmplyeedetailsComponent,
    routingComponents,
    DepartmentOverviewComponent,
    DepartmentContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [EmployeeserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
