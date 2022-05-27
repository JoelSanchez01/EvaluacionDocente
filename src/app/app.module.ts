import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login-student/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginAdminComponent } from './pages/login-admin/login-admin.component';
import { PanelAdminComponent } from './components/panel-admin/panel-admin.component';
import { ControlPeriodoComponent } from './components/control-periodo/control-periodo.component';
import { ResultadosComponent } from './components/resultados/resultados.component';

import { FormsModule } from "@angular/forms";
import { ReactiveFormsModule } from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { AdminComponent } from './pages/admin/admin.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    LoginAdminComponent,
    PanelAdminComponent,
    ControlPeriodoComponent,
    ResultadosComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
