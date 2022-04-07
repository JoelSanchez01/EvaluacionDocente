import { Component, OnInit } from '@angular/core';
import { maestros } from "../../maestros"
@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  nombreEstudiante:String = "Tilin Martinez Hernandez"
  maestrosclase = maestros;
}
