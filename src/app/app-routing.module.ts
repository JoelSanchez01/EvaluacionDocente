import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginAdminComponent } from "./pages/login-admin/login-admin.component";
import { LoginComponent } from "./pages/login-student/login.component";

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'admin', component: LoginAdminComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
