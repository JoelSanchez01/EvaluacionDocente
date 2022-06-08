import {Component, OnInit} from '@angular/core';
import * as XLSX from "xlsx";

import {Alumno} from "../../models/Alumno";
import {Materia} from "../../models/Materia";
import {Periodo} from "../../models/Periodo";
import {Academia} from "../../models/Academia";
import { Carrera } from 'src/app/models/Carrera';
import {Docente} from "../../models/Docente";
import {SeleccionMateria} from "../../models/SeleccionMateria";
import {Grupo} from "../../models/Grupo";
import {CrudService} from "../../services/crud/crud.service";
import {AuthService} from "../../services/auth/auth.service";

@Component({
  selector: 'app-panel-admin',
  templateUrl: './panel-admin.component.html',
  styleUrls: ['./panel-admin.component.scss']
})
export class PanelAdminComponent implements OnInit {

  constructor(public crud: CrudService, public auth: AuthService) { }

  ngOnInit(): void {
  }

  academias: Academia[] = [];
  materias: Materia[] = [];
  alumnos: Alumno[] = [];
  periodos: Periodo[] = [];
  carreras: Carrera[] = [];
  docentes: Docente[] = [];
  grupos: Grupo[] = [];
  seleccionMaterias: SeleccionMateria[] = [];

  archivos: String[] = ["Organigrama", "Materias", "Alumnos", "Periodos", "Carreras", "Personal", "Grupos", "Seleccion de Materias"];

  fileUpload(event1: any) {

    const selectedFile = event1.target.files[0];
    const fileReader = new FileReader;
    fileReader.readAsBinaryString(selectedFile);

    fileReader.onload = (event: any) => {
      let binaryData = event.target.result;
      let workbook = XLSX.read(binaryData, { type: 'binary' });

      workbook.SheetNames.forEach(sheet => {
        const data = XLSX.utils.sheet_to_json(workbook.Sheets[sheet], {header: 1});
        data.shift();

        if (event1.srcElement.__ngContext__[8].$implicit == "Organigrama") {
          this.academias = data.map(item => {
            return new Academia(
              // @ts-ignore
              item[0],
              // @ts-ignore
              item[1],
              // @ts-ignore
              item[2]
            )
          });
        }
        if (event1.srcElement.__ngContext__[8].$implicit == "Materias") {
          this.materias = data.map(item => {
            return new Materia(
              // @ts-ignore
              item[0],
              // @ts-ignore
              item[1],
              // @ts-ignore
              item[2],
              // @ts-ignore
              item[3],
              // @ts-ignore
              item[4],
              // @ts-ignore
              item[5],
            )
          });
        }
        if (event1.srcElement.__ngContext__[8].$implicit == "Alumnos") {
          this.alumnos = data.map(item => {
            return new Alumno(
              // @ts-ignore
              item[0],
              // @ts-ignore
              item[1],
              // @ts-ignore
              item[2],
              // @ts-ignore
              item[3],
              // @ts-ignore
              item[4],
              // @ts-ignore
              item[5],
              // @ts-ignore
              item[6] + " " + item[7] + " " + item[8],
              // @ts-ignore
              item[9]
            )
          });
        }
        if (event1.srcElement.__ngContext__[8].$implicit == "Periodos") {
          this.periodos = data.map(item => {
              return new Periodo(
                // @ts-ignore
                item[0],
                // @ts-ignore
                item[1],
                // @ts-ignore
                item[2],
                // @ts-ignore
                item[3]
              )
          });
        }
        if (event1.srcElement.__ngContext__[8].$implicit == "Carreras") {
          this.carreras = data.map(item => {
            return new Carrera(
              // @ts-ignore
              item[0],
              // @ts-ignore
              item[1],
              // @ts-ignore
              item[2],
              // @ts-ignore
              item[3],
              // @ts-ignore
              item[4]
            )
          })
        }
        if (event1.srcElement.__ngContext__[8].$implicit == "Personal") {
          this.docentes = data.map(item => {
            return new Docente(
              // @ts-ignore
              item[0],
              // @ts-ignore
              item[1],
              // @ts-ignore
              item[2],
              // @ts-ignore
              item[3],
              // @ts-ignore
              item[9] + " " + item[10] + " " + item[5],
              // @ts-ignore
              item[6],
              // @ts-ignore
              item[8],
              // @ts-ignore
              item[11]
          )
          })
        }

        if (event1.srcElement.__ngContext__[8].$implicit == "Grupos") {
          this.grupos = data.map(item => {
            return new Grupo (
              // @ts-ignore
              item[0],
              // @ts-ignore
              item[1],
              // @ts-ignore
              item[2],
              // @ts-ignore
              item[3],
              // @ts-ignore
              item[4],
              // @ts-ignore
              item[8]
            )
          })
        }
        if (event1.srcElement.__ngContext__[8].$implicit == "Seleccion de Materias") {
          this.seleccionMaterias = data.map(item => {
            return new SeleccionMateria(
              // @ts-ignore
              item[0],
              // @ts-ignore
              item[1],
              // @ts-ignore
              item[2],
              // @ts-ignore
              item[3],
              // @ts-ignore
              item[4],
            )
          })
        }
      })
    }
  }

  SubirBDD(val: any) {
  if (val.status == "INVALID") alert("Responde todas las preguntas")
  else {
      this.subirOrganigrama(this.academias);
      this.subirPeriodos(this.periodos);
      this.subirMaterias(this.materias);
      this.subirGrupos(this.grupos);
      this.subirCarreras(this.carreras);
      this.subirAlumnos(this.alumnos);
      this.subirPersonal(this.docentes);
      this.subirSeleccionMat(this.seleccionMaterias);
    }
  }

  subirSeleccionMat(SeleccionMat: SeleccionMateria[]) {
    this.crud.addSelectSubject(SeleccionMat).subscribe();
  }

  subirPersonal(Personal: Docente[]) {
    this.crud.addTeacher(Personal).subscribe();
  }

  subirCarreras(Carreras: Carrera[]) {
    this.crud.addCareer(Carreras).subscribe();
  }

  subirPeriodos(Periodos: Periodo[]) {
    this.crud.addPeriod(Periodos).subscribe();
  }

  subirAlumnos(Alumnos: Alumno[]) {
    this.crud.addStudent(Alumnos).subscribe();
  }

  subirMaterias(Materias: Materia[]) {
    this.crud.addSubject(Materias).subscribe();
  }

  subirOrganigrama(Organigrama: Academia[]) {
    this.crud.addAcademy(Organigrama).subscribe();
  }

  subirGrupos(Grupos: Grupo[]) {
    this.crud.addGroup(Grupos).subscribe();
  }
}
