import { Component, OnInit } from '@angular/core';
import { archivos } from "../../archivos"

@Component({
  selector: 'app-panel-admin',
  templateUrl: './panel-admin.component.html',
  styleUrls: ['./panel-admin.component.scss']
})
export class PanelAdminComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  archivos=archivos;
}
