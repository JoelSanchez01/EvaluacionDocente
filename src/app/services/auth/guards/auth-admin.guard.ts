import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import { Observable } from 'rxjs';
import {AuthService} from "../auth.service";

@Injectable({
  providedIn: 'root'
})
export class AuthAdminGuard implements CanActivate {
  constructor(
    public auth: AuthService,
    public router: Router
  ) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree
  {
    if(!localStorage.getItem("nombre")) {
      if (this.auth.isLoggedOut()) {
        window.alert("Sesion expirada");
        this.router.navigate(['login-admin']);
        this.auth.logout();
        return false;
      }
      return true;
    }
    window.alert("Permiso denegado");
    this.router.navigate(['login-admin']);
    return false;
  }

}
