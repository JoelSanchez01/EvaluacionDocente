import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginAdminComponent } from "./pages/login-admin/login-admin.component";
import { LoginComponent } from "./pages/login-student/login.component";
import {PanelAdminComponent} from "./pages/panel-admin/panel-admin.component";
import {AuthGuard} from "./services/auth/auth.guard";

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full'},
  { path: 'login', component: LoginComponent },
  { path: 'login-admin', component: LoginAdminComponent },
  { path: 'panel-admin', component: PanelAdminComponent, canActivate: [AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
