import { Component, Input, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { CrudService } from 'src/app/services/crud/crud.service';
import { Carrera } from "../../models/Carrera"
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';




var Valores: any[] = [];


@Component({
  selector: 'ngbd-modal-content',
  template: `
    <div class="modal-header">
      <h4 class="modal-title">Edita aqui</h4>
      <button type="button" class="btn-close" aria-label="Close" (click)="activeModal.dismiss('Cross click')"></button>
    </div>
    <div class="modal-body">
     <label for="clave" class="form-label">Clave de la carrera</label>
      <input #claveI type="text" class="form-control"  value="{{carrera.clave_carrera}}">
      
     <label for="reticula" class="form-label">Reticula</label>
      <input  #reticulaI type="text" class="form-control" id="Clave" value="{{carrera.reticula}}">

     <label for="nivel" class="form-label">Nivel Escolar</label>
      <input  #nivelI type="text" class="form-control" id="reticula" value="{{carrera.nivel_escolar}}">

     <label for="claveO" class="form-label">Clave Oficial</label>
      <input #claveOI type="text" class="form-control" id="semestre" value="{{carrera.clave_oficial}}">

      
     <label for="nombre" class="form-label">Nombre</label>
      <input #nombreI type="text" class="form-control" id="semestre" value="{{carrera.nombre}}">





    <button class="btn btn-lg btn-outline-primary" (click)="EditarUno(claveI.value, reticulaI.value, nivelI.value, claveOI.value, nombreI.value)">Guardar</button>
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-outline-dark" (click)="activeModal.close('Close click')">Cerrar</button>
    </div>
  `
})

export class NgbdModalContent {
  @Input()
  carrera!: any;
  @Input()
  indice!: number;


  constructor(public activeModal: NgbActiveModal) { }


  ngOnInit() {
    console.log(this.indice)
  }


  EditarUno(
    clave_carreraP: String, reticulaP: String, nivel_escolarP: String, clave_oficialP: String, nombreP: String) {


    this.activeModal.close(
      {
        indice: { indice: this.indice },
        objeto: {
          clave_carrera: clave_carreraP,
          reticula: reticulaP,
          nivel_escolar: nivel_escolarP,
          clave_oficial: clave_oficialP,
          nombre: nombreP

        }
      }

    )

  }
}








@Component({
  selector: 'app-table-career',
  templateUrl: './table-career.component.html',
  styleUrls: ['./table-career.component.scss']
})
export class TableCareerComponent {

  displayedColumns: string[] = ['clave_c', 'reticula', 'nivel', 'clave', 'nombre', 'Botones'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort)
  sort!: MatSort;


  constructor(public crud: CrudService, private modalService: NgbModal) {
    Valores.splice(0, Valores.length)
    this.crud.getCareer().subscribe(data => {
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




  Editar(row: any) {
    const modalRef = this.modalService.open(NgbdModalContent);
    modalRef.componentInstance.carrera = row;
    modalRef.componentInstance.indice = Valores.findIndex(carrera => carrera.clave_carrera == row.clave_carrera);


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
    otro = Valores.filter(item => item.clave_carrera != id)
    Valores = otro;
    this.dataSource = new MatTableDataSource(Valores);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

  }


  guardarBD() {
    console.log("Guardado final")
  }




}





