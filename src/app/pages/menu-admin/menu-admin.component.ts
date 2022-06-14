import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import {AuthService} from "../../services/auth/auth.service";

@Component({
  selector: 'app-menu-admin',
  templateUrl: './menu-admin.component.html',
  styleUrls: ['./menu-admin.component.scss']
})
export class MenuAdminComponent implements OnInit {

  constructor(private router: Router, private auth : AuthService) { }

  ngOnInit(): void {
  }

  goToEditing() {
    this.router.navigate(['edit-database']);
  }

  adminLogout() {
    this.auth.logout();
    this.router.navigate(['login-admin']);
  }

  uploadScreen() {
    this.router.navigate(['upload-data']);
  }
}
