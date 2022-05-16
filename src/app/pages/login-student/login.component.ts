import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(public form: FormBuilder) {
    this.loginForm = form.group({
      NC: [''],
      pass: ['']
    });
  }

  sendCredentials(): any {
    console.log(this.loginForm.value);
  }

  ngOnInit(): void {
  }

}
