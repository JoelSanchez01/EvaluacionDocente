import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginAdminComponent } from "./pages/login-admin/login-admin.component";
import { LoginComponent } from "./pages/login-student/login.component";

import {AuthGuard} from "./services/auth/guards/auth.guard";
import {QuestionComponent} from "./pages/question/question.component";
import {AuthAdminGuard} from "./services/auth/guards/auth-admin.guard";
import {MenuAdminComponent} from "./pages/menu-admin/menu-admin.component";
import {EditDatabaseComponent} from "./pages/edit-database/edit-database.component";
import {UploadDataComponent} from "./pages/upload-data/upload-data.component";

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full'},
  { path: 'login', component: LoginComponent },
  { path: 'login-admin', component: LoginAdminComponent },

  { path: 'preguntas', component: QuestionComponent, canActivate: [AuthGuard]},

  { path: 'admin', component: MenuAdminComponent, canActivate: [AuthAdminGuard]},
  { path: 'edit-database', component: EditDatabaseComponent, canActivate: [AuthAdminGuard]},
  { path: 'upload-data', component: UploadDataComponent, canActivate: [AuthAdminGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
