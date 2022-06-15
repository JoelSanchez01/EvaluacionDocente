
import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import {AuthService} from "../../services/auth/auth.service";
import {CrudService} from "../../services/crud/crud.service";

@Component({
  selector: 'app-menu-admin',
  templateUrl: './menu-admin.component.html',
  styleUrls: ['./menu-admin.component.scss']
})
export class MenuAdminComponent implements OnInit {

  constructor(private router: Router, private auth : AuthService, private crud : CrudService) { }

  ngOnInit(): void {
  }

  goToEditing() {
    this.router.navigate(['edit-database']);
  }

  adminLogout() {
    this.auth.logout();
    this.router.navigate(['login-admin']);
  }

  getStartDate(startValue:string){
    console.log(startValue);
  }
  getStopDate(stopValue:string){
    console.log(stopValue);
  }
  uploadScreen() {
    this.router.navigate(['upload-data']);
  }

  deleteData() {
    let contrasena = <string> window.prompt("¿Está seguro que desea borrar la base de datos? Introduzca su contraseña");
    let usuario = <string> localStorage.getItem("usuario");
    if(contrasena) {
      this.crud.truncateAllData(usuario, contrasena);
      console.log(contrasena);
    }
  }
}
