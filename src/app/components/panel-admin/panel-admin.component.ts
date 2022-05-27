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

@Component({
  selector: 'app-panel-admin',
  templateUrl: './panel-admin.component.html',
  styleUrls: ['./panel-admin.component.scss']
})
export class PanelAdminComponent implements OnInit {

  constructor() { }

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
          console.log(this.academias);
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
          console.log(this.materias);
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
          console.log(this.alumnos);
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
          console.log(this.periodos);
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
          console.log(this.carreras);
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
          console.log(this.docentes);
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
          console.log(this.grupos);
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
          console.log(this.seleccionMaterias);
        }
      })
    }
  }

  SubirBDD(val: any) {
    if (val.status == "INVALID") alert("Responde todas las preguntas")
    else {
      this.subirOrganigrama(this.academias);
      this.subirMaterias(this.materias);
      this.subirAlumnos(this.alumnos);
      this.subirPeriodos(this.periodos);
      this.subirCarreras(this.carreras);
      this.subirPersonal(this.docentes);
      this.subirSeleccionMat(this.seleccionMaterias);
    }
  }

  subirSeleccionMat(SeleccionMat: unknown[]) {
    SeleccionMat.forEach(function (obj: any) {
      console.log(obj.grupo);
      console.log(obj.materia);
      console.log(obj.no_de_control);
      console.log(obj.periodo);
      console.log(obj.status_seleccion);

    })
  }
  subirPersonal(Personal: unknown[]) {
    Personal.forEach(function (obj: any) {
      console.log(obj.apellido_materno);
      console.log(obj.apellido_paterno);
      console.log(obj.apellidos_empleado);
      console.log(obj.area_academica);
      console.log(obj.clave_area);
      console.log(obj.curp_empleado);
      console.log(obj.no_tarjeta);
      console.log(obj.nombramiento);
      console.log(obj.nombre_empleado);
      console.log(obj.rfc);
      console.log(obj.status_empleado);
      console.log(obj.tipo_personal);
    })
  }
  subirCarreras(Carreras: unknown[]) {
    Carreras.forEach(function (obj: any) {
      console.log(obj.carrera);
      console.log(obj.clave_oficial);
      console.log(obj.modalidad);
      console.log(obj.nivel_escolar);
      console.log(obj.nombre_carrera);
      console.log(obj.nombre_reducido);
      console.log(obj.reticula);
      console.log(obj.siglas);
    })
  }
  subirPeriodos(Periodos: unknown[]) {
    Periodos.forEach(function (obj: any) {
      console.log(obj.identificacion_corta);
      console.log(obj.identificacion_larga);
      console.log(obj.periodo);
      console.log(obj.status);
    })
  }

  subirAlumnos(Alumnos: unknown[]) {
    Alumnos.forEach(function (obj: any) {
      console.log(obj.apellido_materno);
      console.log(obj.apellido_paterno);
      console.log(obj.carrera);
      console.log(obj.estatus_alumno);
      console.log(obj.nip);
      console.log(obj.no_de_control);
      console.log(obj.nombre_alumno);
      console.log(obj.plan_de_estudios);
      console.log(obj.reticula);
      console.log(obj.semestre);
    })
  }

  subirMaterias(Materias: unknown[]) {
    Materias.forEach(function (obj: any) {
      console.log(obj.clave_area);
      console.log(obj.materia);
      console.log(obj.nivel_escolar);
      console.log(obj.nombre_abreviado_materia);
      console.log(obj.nombre_completo_materia);
      console.log(obj.tipo_materia);
    })
  }

  subirOrganigrama(Organigrama: unknown[]) {
    Organigrama.forEach(function (obj: any) {
      console.log(obj.clave_area);
      console.log(obj.descripcion_area);
      console.log(obj.tipo_area)
    })
  }
}
