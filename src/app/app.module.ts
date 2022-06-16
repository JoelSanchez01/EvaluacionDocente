import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login-student/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginAdminComponent } from './pages/login-admin/login-admin.component';
import { UploadDataComponent } from './pages/upload-data/upload-data.component';
import { ControlPeriodoComponent } from './components/control-periodo/control-periodo.component';
import { ResultadosComponent } from './components/resultados/resultados.component';
import { HttpClientModule } from "@angular/common/http";
import { AdminComponent } from './pages/admin/admin.component';
import { QuestionComponent } from './pages/question/question.component';
import { MenuAdminComponent } from './pages/menu-admin/menu-admin.component';
import { EditDatabaseComponent } from './pages/edit-database/edit-database.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table'
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { TableStudentsComponent } from './components/table-students/table-students.component';
import { TableTeacherComponent } from './components/table-teacher/table-teacher.component';
import { TableAcademyComponent } from './components/table-academy/table-academy.component';
import { TablePeriodComponent } from './components/table-period/table-period.component';
import { TableSubjectComponent } from './components/table-subject/table-subject.component';
import { TableGroupComponent } from './components/table-group/table-group.component';
import { TableCareerComponent } from './components/table-career/table-career.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ControlPeriodoComponent,
    ResultadosComponent,
    UploadDataComponent,
    LoginComponent,
    LoginAdminComponent,
    QuestionComponent,
    AdminComponent,
    MenuAdminComponent,
    EditDatabaseComponent,
    UploadDataComponent,
    TableStudentsComponent,
    TableTeacherComponent,
    TableAcademyComponent,
    TablePeriodComponent,
    TableSubjectComponent,
    TableGroupComponent,
    TableCareerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatPaginatorModule,
    MatTableModule,
    MatToolbarModule,
    MatButtonModule,
    MatDialogModule,
    MatInputModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
