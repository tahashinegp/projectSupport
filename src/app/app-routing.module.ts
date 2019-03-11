import { NgModule } from '@angular/core';
import { Routes, RouterModule, } from '@angular/router';
import { AppComponent } from './app.component';
import { DepartmentListComponent } from './department-list/department-list.component';
import { StudentListComponent } from './student-list/student-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DepartmentDetailsComponent } from './department-details/department-details.component';
import { DepartmentOverviewComponent } from './department-overview/department-overview.component';
import { DepartmentContactComponent } from './department-contact/department-contact.component';

const routes: Routes = [
  //{path : '', redirectTo: '/departments', pathMatch: 'prefix'},
  {path : '', component: AppComponent},
  {path : 'departments', component: DepartmentListComponent},
  {
    path: 'departments/:id',
    component: DepartmentDetailsComponent,
    children :[
      {path: 'overview', component: DepartmentOverviewComponent},
      {path: 'contact', component: DepartmentContactComponent}
    ]
  },
  {path: 'students', component: StudentListComponent},
  {path: '**', component: PageNotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [DepartmentListComponent, StudentListComponent,
                                  PageNotFoundComponent, DepartmentDetailsComponent];
