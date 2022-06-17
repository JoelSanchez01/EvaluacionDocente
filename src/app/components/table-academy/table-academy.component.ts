import { Component, Input, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { CrudService } from 'src/app/services/crud/crud.service';
import { Academia } from "../../models/Academia"
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';




var Valores: Academia[] = [];


@Component({
  selector: 'ngbd-modal-content',
  template: `
    <div class="modal-header">
      <h4 class="modal-title">Edita aqui</h4>
      <button type="button" class="btn-close" aria-label="Close" (click)="activeModal.dismiss('Cross click')"></button>
    </div>
    <div class="modal-body">
     <label for="descripcionI" class="form-label">Descripcion</label>
      <input #descripcionI type="text" class="form-control"  value="{{academia.descripcion}}">
      
     <label for="claveI" class="form-label">Clave</label>
      <input  #claveI type="text" class="form-control" value="{{academia.clave}}">

     <label for="tipoI" class="form-label">Tipo</label>
      <input  #tipoI type="text" class="form-control" value="{{academia.tipo}}">

  

    <button class="btn btn-lg btn-outline-primary" (click)="EditarUno(descripcionI.value, claveI.value,tipoI.value  )">Guardar</button>
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-outline-dark" (click)="activeModal.close('Close click')">Cerrar</button>
    </div>
  `
})

export class NgbdModalContent {
  @Input()
  academia!: Academia;
  @Input()
  indice!: number;


  constructor(public activeModal: NgbActiveModal) { }


  ngOnInit() {
    console.log(this.indice)
  }


  EditarUno(descripcionP: String, claveP: String, tipoP: String) {


    this.activeModal.close(
      {
        indice: { indice: this.indice },
        objeto: {
          descripcion: descripcionP,
          clave: claveP,
          tipo: tipoP,

        }
      }

    )

  }
}







@Component({
  selector: 'app-table-academy',
  templateUrl: './table-academy.component.html',
  styleUrls: ['./table-academy.component.scss']
})
export class TableAcademyComponent {

  displayedColumnsAlumnos: string[] = ['Descripcion', 'Clave', 'Tipo', 'Botones'];
  dataSource!: MatTableDataSource<Academia>;

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort)
  sort!: MatSort;


  constructor(public crud: CrudService, private modalService: NgbModal) {
    Valores.splice(0, Valores.length)
    this.crud.getAcademy().subscribe(data => {
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




  Editar(row: Academia) {
    const modalRef = this.modalService.open(NgbdModalContent);
    modalRef.componentInstance.academia = row;
    modalRef.componentInstance.indice = Valores.findIndex(Academia => Academia.clave == row.clave);


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
    otro = Valores.filter(item => item.clave != id)
    Valores = otro;
    this.dataSource = new MatTableDataSource(Valores);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

  }


  guardarBD() {
    console.log("Guardado final")
  }




}







