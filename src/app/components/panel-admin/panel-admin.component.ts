import { sha1 } from '@angular/compiler/src/i18n/digest';
import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms"
import * as XLSX from "xlsx";
@Component({
  selector: 'app-panel-admin',
  templateUrl: './panel-admin.component.html',
  styleUrls: ['./panel-admin.component.scss']
})
export class PanelAdminComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  Organigrama: unknown[] = [];
  Materias: unknown[] = [];
  Alumnos: unknown[] = [];
  Periodos: unknown[] = [];
  Carreras: unknown[] = [];
  Personal: unknown[] = [];
  Grupos: unknown[] = [];
  SeleccionMat: unknown[] = [];



  archivos: String[] = ["Organigrama", "Materias", "Alumnos", "Periodos", "Carreras", "Personal", "Grupos", "Seleccion de Materias"];



  fileUpload(event1: any) {

    const selectedFile = event1.target.files[0];
    const fileReader = new FileReader;
    fileReader.readAsBinaryString(selectedFile);

    fileReader.onload = (event: any) => {
      let binaryData = event.target.result;
      let workbook = XLSX.read(binaryData, { type: 'binary' });

      workbook.SheetNames.forEach(sheet => {
        const data = XLSX.utils.sheet_to_json(workbook.Sheets[sheet])

        if (event1.srcElement.__ngContext__[8].$implicit == "Organigrama") this.Organigrama = data;
        if (event1.srcElement.__ngContext__[8].$implicit == "Materias") this.Materias = data;
        if (event1.srcElement.__ngContext__[8].$implicit == "Alumnos") this.Alumnos = data;
        if (event1.srcElement.__ngContext__[8].$implicit == "Periodos") this.Periodos = data;
        if (event1.srcElement.__ngContext__[8].$implicit == "Carreras") this.Carreras = data;
        if (event1.srcElement.__ngContext__[8].$implicit == "Personal") this.Personal = data;
        if (event1.srcElement.__ngContext__[8].$implicit == "Grupos") this.Grupos = data;
        if (event1.srcElement.__ngContext__[8].$implicit == "Seleccion de Materias") this.SeleccionMat = data;
      })
    }
  }

  SubirBDD(val: any) {
    if (val.status == "INVALID") alert("Responde todas las preguntas")
    else {
      this.subirOrganigrama(this.Organigrama);
      this.subirMaterias(this.Materias);
      this.subirAlumnos(this.Alumnos);
      this.subirPeriodos(this.Periodos);
      this.subirCarreras(this.Carreras);
      this.subirPersonal(this.Personal);
      this.subirSeleccionMat(this.SeleccionMat);
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
