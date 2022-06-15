import { StringMap } from '@angular/compiler/src/compiler_facade_interface';
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
  displayedColumns: string[] = ['id', 'name', 'progress', 'fruit'];
  dataSource!: MatTableDataSource<Alumno>;

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort)
  sort!: MatSort;



  cargando: boolean = true;

  constructor(public crud: CrudService) {
    // Create 100 users
    // Assign the data to the data source for the table to render
  }

  private iterador = 1;




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


  Valores: any[] = []

  onChange(valor: any) {
    console.log(valor.value)
    if (valor.value == "Alumnos") {
      this.Valores.splice(0, this.Valores.length)
      this.crud.getStudent().subscribe(data => {
        this.Valores = data;
        this.dataSource = new MatTableDataSource(this.Valores);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        this.cargando = false;
        console.log(data)

      })
    }
    if (valor.value == "Personal") {
      this.crud.getTeachers().subscribe(data => {
        this.Valores.splice(0, this.Valores.length)
        this.Valores = data;
        this.dataSource = new MatTableDataSource(this.Valores);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        this.cargando = false;
        console.log(data)

      })
    }
    if (valor.value == "Academias") {
      this.Valores.splice(0, this.Valores.length)
      this.crud.getAcademy().subscribe(data => {
        this.Valores.splice(0, this.Valores.length)
        this.Valores = data;
        this.dataSource = new MatTableDataSource(this.Valores);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        this.cargando = false;
        console.log(data)

      })

    }

    if (valor.value == "Grupos") {
      this.Valores.splice(0, this.Valores.length)
      this.crud.getGroup().subscribe(data => {
        this.Valores.splice(0, this.Valores.length)
        this.Valores = data;
        this.dataSource = new MatTableDataSource(this.Valores);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        this.cargando = false;
        console.log(data)

      })

    }

    if (valor.value == "Periodos") {
      this.Valores.splice(0, this.Valores.length)
      this.crud.getPeriod().subscribe(data => {
        this.Valores.splice(0, this.Valores.length)
        this.Valores = data;
        this.dataSource = new MatTableDataSource(this.Valores);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        this.cargando = false;
        console.log(data)

      })

    }

    if (valor.value == "Materias") {
      this.Valores.splice(0, this.Valores.length)
      this.crud.getSubject().subscribe(data => {
        this.Valores.splice(0, this.Valores.length)
        this.Valores = data;
        this.dataSource = new MatTableDataSource(this.Valores);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        this.cargando = false;
        console.log(data)

      })

    }

    if (valor.value == "Carreras") {
      this.Valores.splice(0, this.Valores.length)
      this.crud.getCareer().subscribe(data => {
        this.Valores.splice(0, this.Valores.length)
        this.Valores = data;
        this.dataSource = new MatTableDataSource(this.Valores);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        this.cargando = false;
        console.log(data)

      })

    }




  }


}


