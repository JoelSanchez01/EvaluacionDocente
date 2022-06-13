import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginAdminComponent } from "./pages/login-admin/login-admin.component";
import { LoginComponent } from "./pages/login-student/login.component";
import {AdminComponent} from "./pages/admin/admin.component";

import {AuthGuard} from "./services/auth/guards/auth.guard";
import {QuestionComponent} from "./pages/question/question.component";
import {AuthAdminGuard} from "./services/auth/guards/auth-admin.guard";
import {MenuadminComponent} from "./components/menuadmin/menuadmin.component";

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full'},
  { path: 'login', component: LoginComponent },
  { path: 'login-admin', component: LoginAdminComponent },
  { path: 'preguntas', component: QuestionComponent, canActivate: [AuthGuard]},
  { path: 'admin', component: MenuadminComponent, canActivate: [AuthAdminGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
