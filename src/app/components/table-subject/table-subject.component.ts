import { Component, Input, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { CrudService } from 'src/app/services/crud/crud.service';
import { Materia } from "../../models/Materia"
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';




var Valores: Materia[] = [];


@Component({
  selector: 'ngbd-modal-content',
  template: `
    <div class="modal-header">
      <h4 class="modal-title">Edita aqui</h4>
      <button type="button" class="btn-close" aria-label="Close" (click)="activeModal.dismiss('Cross click')"></button>
    </div>
    <div class="modal-body">
     <label for="claveI" class="form-label">Clave </label>
      <input #claveI type="text" class="form-control"  value="{{materia.clave_materia}}">
      
     <label for="nivelI" class="form-label">Nivel Escolar</label>
      <input  #nivelI type="text" class="form-control" value="{{materia.nivel_escolar}}">

     <label for="tipoI" class="form-label">Tipo</label>
      <input  #tipoI type="text" class="form-control" value="{{materia.tipo}}">

     <label for="claveAI" class="form-label">Clave de Area</label>
      <input #claveAI type="text" class="form-control" value="{{materia.clave_area}}">

     <label for="nombreI" class="form-label">Nombre</label>
      <input #nombreI type="text" class="form-control" value="{{materia.nombre}}">

     <label for="nombreaI" class="form-label">Nombre Abreviado</label>
      <input #nombreaI type="text" class="form-control" value="{{materia.nombre_abreviado}}">

      

    <button class="btn btn-lg btn-outline-primary" (click)="EditarUno(claveI.value, nivelI.value, tipoI.value,claveAI.value, nombreI.value,nombreaI.value)">Guardar</button>
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-outline-dark" (click)="activeModal.close('Close click')">Cerrar</button>
    </div>
  `
})

export class NgbdModalContent {
  @Input()
  materia!: Materia;
  @Input()
  indice!: number;


  constructor(public activeModal: NgbActiveModal) { }


  ngOnInit() {
    console.log(this.indice)
  }


  EditarUno(clave_materiaP: String, nivel_escolarP: String, tipoP: String, clave_areaP: String, nombreP: String, nombre_abreviadoP: String
  ) {

    this.activeModal.close(
      {
        indice: { indice: this.indice },
        objeto: {
          clave_materia: clave_materiaP,
          nivel_escolar: nivel_escolarP,
          tipo: tipoP,
          clave_area: clave_areaP,
          nombre: nombreP,
          nombre_abreviado: nombre_abreviadoP

        }
      }

    )

  }
}





@Component({
  selector: 'app-table-subject',
  templateUrl: './table-subject.component.html',
  styleUrls: ['./table-subject.component.scss']
})
export class TableSubjectComponent {

  displayedColumnsAlumnos: string[] = ['Clave', 'Nivel', 'Tipo', 'ClaveA', 'Nombre', 'NombreA', 'Botones'];
  dataSource!: MatTableDataSource<Materia>;

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort)
  sort!: MatSort;


  constructor(public crud: CrudService, private modalService: NgbModal) {
    Valores.splice(0, Valores.length)
    this.crud.getSubject().subscribe(data => {
      Valores = data;
      this.dataSource = new MatTableDataSource(Valores);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }




  Editar(row: Materia) {
    const modalRef = this.modalService.open(NgbdModalContent);
    modalRef.componentInstance.materia = row;
    modalRef.componentInstance.indice = Valores.findIndex(Materia => Materia.clave_materia == row.clave_materia);


    modalRef.result.then((result) => {
      if (result) {
        Valores[result.indice.indice] = result.objeto;
        console.log(Valores[result.indice.indice]);

        this.dataSource = new MatTableDataSource(Valores);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      }
    })
      .catch(err => { console.log("No se hicieron cambios") });
  }







  Borrar(id: String) {
    let otro = [];
    otro = Valores.filter(item => item.clave_materia != id)
    Valores = otro;
    this.dataSource = new MatTableDataSource(Valores);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

  }


  guardarBD() {
    console.log("Guardado final")
  }




}






