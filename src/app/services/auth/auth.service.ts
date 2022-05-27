import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

import { Alumno } from "../../models/Alumno";
import moment from "moment";
import { map } from "rxjs/operators";
import { Admin } from "../../models/Admin";

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  public baseUrl: string = 'http://localhost:8000/api';

  constructor(private http: HttpClient) { }

  login(control:string, nip:string ) {
    return this.http.post<Alumno>(this.baseUrl + '/student/login.php', {control, nip})
      .pipe(map(AuthService.setSession));
  }

  loginAdmin(usuario:string, contrasena:string ) {
    return this.http.post<Admin>(this.baseUrl + '/admin/login.php', {usuario, contrasena})
      .pipe(map(AuthService.setSession));
  }

  private static setSession(authResult: any) {
    const expiresAt = moment().add(authResult.expiresIn,'second');

    localStorage.setItem('id_token', authResult.idToken);
    localStorage.setItem('usuario', authResult.usuario)
    localStorage.setItem('nombre', authResult.nombre)
    localStorage.setItem("expires_at", JSON.stringify(expiresAt.valueOf()) );
  }

  logout() {
    localStorage.removeItem("id_token");
    localStorage.removeItem("usuario");
    localStorage.removeItem('nombre')
    localStorage.removeItem("expires_at");
  }

  public isLoggedIn() {
    return moment().isBefore(this.getExpiration());
  }

  isLoggedOut() {
    return !this.isLoggedIn();
  }

  getExpiration() {
    const expiration = localStorage.getItem("expires_at");
    // @ts-ignore
    const expiresAt = JSON.parse(expiration);
    return moment(expiresAt);
  }
}
