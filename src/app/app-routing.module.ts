import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { UserComponent } from './user/user.component';
import { UserFormComponent } from './user-form/user-form.component';
import { HphcHeadComponent } from './hphc-head/hphc-head.component';
import { JsonPracticeComponent } from './json-practice/json-practice.component';
import { OhiReportComponent } from './ohi-report/ohi-report.component';
 
//This is where the actual connection is created.
const routes: Routes = [
  { path: 'users', component: UserListComponent },
  { path: 'users/:id', component: UserComponent }, //:id = {id}
  { path: 'adduser', component: UserFormComponent },
  { path: 'hphc-head/:id', component: HphcHeadComponent },
  { path: 'json-practice', component: JsonPracticeComponent },
  { path: 'ohi-report', component: OhiReportComponent }
];
 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }