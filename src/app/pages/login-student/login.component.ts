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
    public router: Router)
  {
    /**
     * @brief this if is a workaound
     * @TODO we need to remove this at deploy
     */
    if(this.auth.isLoggedIn()) {
      this.auth.logout();
    }
    this.loginForm = form.group({
      control: [''],
      nip: ['']
    });
  }

  sendCredentials(): any {
    const value = this.loginForm.value;

    if(value.control && value.nip) {
      this.auth.login(value.control, value.nip)
        .subscribe(() => {
          console.log("user logged");
          console.log("Usuario: " + localStorage.getItem('usuario'));
          console.log("Token: " + localStorage.getItem('id_token'));
          console.log("Expiracion: " + localStorage.getItem('expires_at'));

          this.router.navigate(['preguntas']);
        })
    }
  }

  ngOnInit(): void {
  }

}
