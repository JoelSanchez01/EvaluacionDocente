import { Component } from '@angular/core';





@Component({
  selector: 'app-edit-database',
  templateUrl: './edit-database.component.html',
  styleUrls: ['./edit-database.component.scss']

})



export class EditDatabaseComponent {


  constructor() {
  }







  Seleccionador = "Alumnos";



  onChange(valor: any) {
    if (valor.value == "Alumnos") {
      this.Seleccionador = "Alumnos";
    }
    if (valor.value == "Personal") {
      this.Seleccionador = "Personal";
    }
    if (valor.value == "Academias") {
      this.Seleccionador = "Academias";
    }

    if (valor.value == "Grupos") {
      this.Seleccionador = "Grupos";
    }

    if (valor.value == "Periodos") {
      this.Seleccionador = "Periodos";
    }

    if (valor.value == "Materias") {
      this.Seleccionador = "Materias";
    }

    if (valor.value == "Carreras") {
      this.Seleccionador = "Carreras";
    }

  }



















}


