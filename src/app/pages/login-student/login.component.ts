import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms";
import {AuthService} from "../../services/auth/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(
    public form: FormBuilder,
    public auth: AuthService,
    public router: Router) {
    this.loginForm = form.group({
      control: [''],
      contrasena: ['']
    });
  }

  sendCredentials(): any {
    const value = this.loginForm.value;
    if(value.control && value.contrasena) {
      this.auth.login(value.control, value.contrasena)
        .subscribe(() => {
          console.log("user logged");
          console.log("Usuario: " + localStorage.getItem('usuario'));
          console.log("Token: " + localStorage.getItem('id_token'));
          console.log("Expiracion: " + localStorage.getItem('expires_at'));
        })
    }
  }

  ngOnInit(): void {
  }

}
