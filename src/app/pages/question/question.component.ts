import {Component, OnInit} from '@angular/core';
import {maestros} from "../../maestros"
import {preguntas} from "../../preguntas"
import {MateriaDocente} from "../../models/MateriaDocente";
import {CrudService} from "../../services/crud/crud.service";
import {map} from "rxjs/operators";
import {Router} from "@angular/router";
import {AuthService} from "../../services/auth/auth.service";
import {ResultadoDocente} from "../../models/ResultadoDocente";
import {Categorias} from "../../models/submodels/Categorias";

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {
  araregloNumeros: Number[] = [5, 4, 3, 2, 1];
  nombreEstudiante: string = "Tilin Martinez Hernandez";
  maestrosclase = maestros;
  materiasDocentes!: MateriaDocente[];
  resultadoDocentes!: ResultadoDocente[];
  control: string = "";

  numero: String = "";
  validator: boolean = true;
  preguntaIDL: number = 0;

  preguntaPagina = preguntas[this.preguntaIDL];

  cargando = true;

  constructor(private crud: CrudService, private router: Router, private auth: AuthService) {
    this.nombreEstudiante = <string>localStorage.getItem("nombre");
    this.control = <string>localStorage.getItem("usuario");

    //this.materiasDocentes = <MateriaDocente[]> this.crud.getSubjectsAndTeachers(this.control);

    this.crud.getTeachersAndSubjects(this.control).subscribe(data => {
      this.materiasDocentes = <MateriaDocente[]> data;
      this.resultadoDocentes = this.materiasDocentes.map((item) => {
        return new ResultadoDocente(
          item,
          new Categorias(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0)
        );
      });
      this.cargando = false;
    });
  }

  ngOnInit(): void {
  }

  getValues(val: any) {
    if (val.status == "INVALID") alert("Responde todas las preguntas")
    else {
      for (let i = 0; i < this.materiasDocentes.length; i++) {
        //if (this.maestrosclase[i].grupo == Object.entries(val.value)[i][0]) {
        if (this.preguntaPagina.ID <= 5)
          this.resultadoDocentes[i].categorias.catA = this.resultadoDocentes[i].categorias.catA + (Number(Object.entries(val.value)[i][1]));
        else if (this.preguntaPagina.ID <= 8)
          this.resultadoDocentes[i].categorias.catB = this.resultadoDocentes[i].categorias.catB + (Number(Object.entries(val.value)[i][1]));
        else if (this.preguntaPagina.ID <= 13)
          this.resultadoDocentes[i].categorias.catC = this.resultadoDocentes[i].categorias.catC + (Number(Object.entries(val.value)[i][1]));
        else if (this.preguntaPagina.ID <= 20)
          this.resultadoDocentes[i].categorias.catD = this.resultadoDocentes[i].categorias.catD + (Number(Object.entries(val.value)[i][1]));
        else if (this.preguntaPagina.ID <= 27)
          this.resultadoDocentes[i].categorias.catE = this.resultadoDocentes[i].categorias.catE + (Number(Object.entries(val.value)[i][1]));
        else if (this.preguntaPagina.ID <= 35)
          this.resultadoDocentes[i].categorias.catF = this.resultadoDocentes[i].categorias.catF + (Number(Object.entries(val.value)[i][1]));
        else if (this.preguntaPagina.ID <= 38)
          this.resultadoDocentes[i].categorias.catG = this.resultadoDocentes[i].categorias.catG + (Number(Object.entries(val.value)[i][1]));
        else if (this.preguntaPagina.ID <= 42)
          this.resultadoDocentes[i].categorias.catH = this.resultadoDocentes[i].categorias.catH + (Number(Object.entries(val.value)[i][1]));
        else if (this.preguntaPagina.ID <= 45)
          this.resultadoDocentes[i].categorias.catI = this.resultadoDocentes[i].categorias.catI + (Number(Object.entries(val.value)[i][1]));
        else if (this.preguntaPagina.ID <= 48)
          this.resultadoDocentes[i].categorias.catJ = this.resultadoDocentes[i].categorias.catJ + (Number(Object.entries(val.value)[i][1]));

        if (this.preguntaPagina.ID == 48) {
          this.resultadoDocentes[i].categorias.catA = this.resultadoDocentes[i].categorias.catA / 5;
          this.resultadoDocentes[i].categorias.catB = this.resultadoDocentes[i].categorias.catB / 3;
          this.resultadoDocentes[i].categorias.catC = this.resultadoDocentes[i].categorias.catC / 5;
          this.resultadoDocentes[i].categorias.catD = this.resultadoDocentes[i].categorias.catD / 7;
          this.resultadoDocentes[i].categorias.catE = this.resultadoDocentes[i].categorias.catE / 7;
          this.resultadoDocentes[i].categorias.catF = this.resultadoDocentes[i].categorias.catF / 8;
          this.resultadoDocentes[i].categorias.catG = this.resultadoDocentes[i].categorias.catG / 3;
          this.resultadoDocentes[i].categorias.catH = this.resultadoDocentes[i].categorias.catH / 4;
          this.resultadoDocentes[i].categorias.catI = this.resultadoDocentes[i].categorias.catI / 3;
          this.resultadoDocentes[i].categorias.catJ = this.resultadoDocentes[i].categorias.catJ / 3;

          alert("YA TERMINASTE");
          this.auth.logout();

          break;
        }
        //}
      }

      this.preguntaIDL++;
      this.preguntaPagina = preguntas[this.preguntaIDL];
      val.reset();
    }
  }
}
