import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from "@angular/forms";

@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.component.html',
  styleUrls: ['./login-admin.component.scss']
})
export class LoginAdminComponent implements OnInit {
  loginAdminForm: FormGroup;

  constructor(public form: FormBuilder) {
    this.loginAdminForm = form.group({
      user: [''],
      pass: ['']
    });
  }

  sendCredentials(): any {
    console.log(this.loginAdminForm.value);
  }

  ngOnInit(): void {
  }

}
