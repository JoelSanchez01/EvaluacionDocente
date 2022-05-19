import { Component, OnInit } from '@angular/core';
import { maestros } from "../../maestros"
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  araregloNumeros: Number[] = [5, 4, 3, 2, 1]
  nombreEstudiante: String = "Tilin Martinez Hernandez"
  maestrosclase = maestros;
  numero: String = "";



  getValues(val: any) {
    console.log(val);
  }



}
