import { NgModule } from '@angular/core';
import { Routes, RouterModule, } from '@angular/router';
import { AppComponent } from './app.component';
import { DepartmentListComponent } from './department-list/department-list.component';
import { StudentListComponent } from './student-list/student-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {path : '', redirectTo: '/departments', pathMatch: 'prefix'},
  {path: 'departments', component: DepartmentListComponent},
  {path: 'students', component: StudentListComponent},
  {path: '**', component: PageNotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [DepartmentListComponent, StudentListComponent, PageNotFoundComponent];
