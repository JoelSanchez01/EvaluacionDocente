import { AfterViewInit, Component, KeyValueDiffers, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { CrudService } from 'src/app/services/crud/crud.service';
import { Alumno } from "../../models/Alumno"









@Component({
  selector: 'app-edit-database',
  templateUrl: './edit-database.component.html',
  styleUrls: ['./edit-database.component.scss']

})



export class EditDatabaseComponent implements AfterViewInit {
  displayedColumnsAlumnos: string[] = ['NC', 'Clave', 'Reticula', 'Semestre', 'Estado', 'planEstudios', 'Nombre', 'NIP', 'Botones'];
  dataSource!: MatTableDataSource<Alumno>;

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort)
  sort!: MatSort;



  cargando: boolean = true;

  constructor(public crud: CrudService) {

    this.Iniciar();
  }

  private iterador = 1;



  AlumnosDisabled: boolean = true;


  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }



  Valores: any[] = [];

  Seleccionador = "Alumnos";



  onChange(valor: any) {
    if (valor.value == "Alumnos") {
      this.Seleccionador = "Alumnos";
      this.Valores.splice(0, this.Valores.length)
      this.crud.getStudent().subscribe(data => {
        this.Valores = data;
        this.dataSource = new MatTableDataSource(this.Valores);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        this.cargando = false;
      })
    }
    if (valor.value == "Personal") {
      this.Seleccionador = "Personal";

      this.crud.getTeachers().subscribe(data => {
        this.Valores.splice(0, this.Valores.length)
        this.Valores = data;
        this.dataSource = new MatTableDataSource(this.Valores);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        this.cargando = false;

      })
    }
    if (valor.value == "Academias") {
      this.Seleccionador = "Academias";

      this.Valores.splice(0, this.Valores.length)
      this.crud.getAcademy().subscribe(data => {
        this.Valores.splice(0, this.Valores.length)
        this.Valores = data;
        this.dataSource = new MatTableDataSource(this.Valores);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        this.cargando = false;

      })

    }

    if (valor.value == "Grupos") {
      this.Seleccionador = "Grupos";

      this.Valores.splice(0, this.Valores.length)
      this.crud.getGroup().subscribe(data => {
        this.Valores.splice(0, this.Valores.length)
        this.Valores = data;
        this.dataSource = new MatTableDataSource(this.Valores);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        this.cargando = false;

      })

    }

    if (valor.value == "Periodos") {
      this.Seleccionador = "Periodos";

      this.Valores.splice(0, this.Valores.length)
      this.crud.getPeriod().subscribe(data => {
        this.Valores.splice(0, this.Valores.length)
        this.Valores = data;
        this.dataSource = new MatTableDataSource(this.Valores);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        this.cargando = false;

      })

    }

    if (valor.value == "Materias") {
      this.Seleccionador = "Materias";

      this.Valores.splice(0, this.Valores.length)
      this.crud.getSubject().subscribe(data => {
        this.Valores.splice(0, this.Valores.length)
        this.Valores = data;
        this.dataSource = new MatTableDataSource(this.Valores);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        this.cargando = false;

      })

    }

    if (valor.value == "Carreras") {
      this.Seleccionador = "Carreras";

      this.Valores.splice(0, this.Valores.length)
      this.crud.getCareer().subscribe(data => {
        this.Valores.splice(0, this.Valores.length)
        this.Valores = data;
        this.dataSource = new MatTableDataSource(this.Valores);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        this.cargando = false;


      })

    }




  }

  Iniciar() {
    this.Seleccionador = "Alumnos";
    this.Valores.splice(0, this.Valores.length)
    this.crud.getStudent().subscribe(data => {
      this.Valores = data;
      this.dataSource = new MatTableDataSource(this.Valores);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      this.cargando = false;
    })
  }


  Editar(id: any, objeto: any) {
    this.AlumnosDisabled = !this.AlumnosDisabled;

  }

  otro: any[] = [];



  Borrar(id: any, tabla: any) {
    if (tabla == "Alumnos") {
      this.otro = this.Valores.filter(item => item.control != id)
      this.Valores = this.otro;
      this.dataSource = new MatTableDataSource(this.Valores);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      this.cargando = false;
    }

  }






}


