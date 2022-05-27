import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from "@angular/forms";
import {AuthService} from "../../services/auth/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.component.html',
  styleUrls: ['./login-admin.component.scss']
})
export class LoginAdminComponent implements OnInit {
  loginAdminForm: FormGroup;

  constructor(
    public form: FormBuilder,
    public auth: AuthService,
    public router: Router
  ) {
    this.loginAdminForm = form.group({
      usuario: [''],
      contrasena: ['']
    });
  }

  sendCredentials(): any {
    const value = this.loginAdminForm.value;
    if(value.usuario && value.contrasena) {
      this.auth.loginAdmin(value.usuario, value.contrasena)
        .subscribe(() => {
          console.log("user logged");
          console.log("Usuario: " + localStorage.getItem('user'));
          console.log("Token: " + localStorage.getItem('id_token'));
          console.log("Expiracion: " + localStorage.getItem('expires_at'));

          this.router.navigate(['panel-admin']);
        })
    }
  }

  ngOnInit(): void {
  }

}
