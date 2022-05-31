import { Component, OnInit } from '@angular/core';
import { maestros } from "../../maestros"
import { preguntas } from "../../preguntas"
@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {

  constructor() {
    this.nombreEstudiante = <string> localStorage.getItem("nombre");

  }

  ngOnInit(): void {
  }

  araregloNumeros: Number[] = [5, 4, 3, 2, 1]
  nombreEstudiante: String = "Tilin Martinez Hernandez"
  maestrosclase = maestros;

  numero: String = "";
  validator: boolean = true;
  preguntaIDL: number = 0;

  preguntaPagina = preguntas[this.preguntaIDL];



  getValues(val: any) {
    if (val.status == "INVALID") alert("Responde todas las preguntas")
    else {


      for (let i = 0; this.maestrosclase.length > i; i++) {

        if (this.maestrosclase[i].grupo == Object.entries(val.value)[i][0]) {



          if (this.preguntaPagina.ID <= 5)
            this.maestrosclase[i].catDominioA = this.maestrosclase[i].catDominioA + (Number(Object.entries(val.value)[i][1]));
          else if (this.preguntaPagina.ID <= 8)
            this.maestrosclase[i].catPlanificacionB = this.maestrosclase[i].catPlanificacionB + (Number(Object.entries(val.value)[i][1]));
          else if (this.preguntaPagina.ID <= 13)
            this.maestrosclase[i].catAmbientesC = this.maestrosclase[i].catAmbientesC + (Number(Object.entries(val.value)[i][1]));
          else if (this.preguntaPagina.ID <= 20)
            this.maestrosclase[i].catEstrategiasD = this.maestrosclase[i].catEstrategiasD + (Number(Object.entries(val.value)[i][1]));
          else if (this.preguntaPagina.ID <= 27)
            this.maestrosclase[i].catMotivacionE = this.maestrosclase[i].catMotivacionE + (Number(Object.entries(val.value)[i][1]));
          else if (this.preguntaPagina.ID <= 35)
            this.maestrosclase[i].catEvaluacionF = this.maestrosclase[i].catEvaluacionF + (Number(Object.entries(val.value)[i][1]));
          else if (this.preguntaPagina.ID <= 38)
            this.maestrosclase[i].catComunicacionG = this.maestrosclase[i].catComunicacionG + (Number(Object.entries(val.value)[i][1]));
          else if (this.preguntaPagina.ID <= 42)
            this.maestrosclase[i].catGestionH = this.maestrosclase[i].catGestionH + (Number(Object.entries(val.value)[i][1]));
          else if (this.preguntaPagina.ID <= 45)
            this.maestrosclase[i].catTicsI = this.maestrosclase[i].catTicsI + (Number(Object.entries(val.value)[i][1]));
          else if (this.preguntaPagina.ID <= 48)
            this.maestrosclase[i].catSatisfaccionJ = this.maestrosclase[i].catSatisfaccionJ + (Number(Object.entries(val.value)[i][1]));



          if (this.preguntaPagina.ID == 48) {
            this.maestrosclase[i].catDominioA = this.maestrosclase[i].catDominioA / 5;
            this.maestrosclase[i].catPlanificacionB = this.maestrosclase[i].catPlanificacionB / 3;
            this.maestrosclase[i].catAmbientesC = this.maestrosclase[i].catAmbientesC / 5;
            this.maestrosclase[i].catEstrategiasD = this.maestrosclase[i].catEstrategiasD / 7;
            this.maestrosclase[i].catMotivacionE = this.maestrosclase[i].catMotivacionE / 7;
            this.maestrosclase[i].catEvaluacionF = this.maestrosclase[i].catEvaluacionF / 8;
            this.maestrosclase[i].catComunicacionG = this.maestrosclase[i].catComunicacionG / 3;
            this.maestrosclase[i].catGestionH = this.maestrosclase[i].catGestionH / 4;
            this.maestrosclase[i].catTicsI = this.maestrosclase[i].catTicsI / 3;
            this.maestrosclase[i].catSatisfaccionJ = this.maestrosclase[i].catSatisfaccionJ / 3;


            console.log(this.maestrosclase)
            alert("YA TERMINASTE")
            break;


          }

        }


      }


      this.preguntaIDL++;
      this.preguntaPagina = preguntas[this.preguntaIDL];
      val.reset();
    };
  }



}
