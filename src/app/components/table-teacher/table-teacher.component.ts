import { Component, Input, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { CrudService } from 'src/app/services/crud/crud.service';
import { Docente } from "../../models/Docente"
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';




var Valores: Docente[] = [];


@Component({
  selector: 'ngbd-modal-content',
  template: `
    <div class="modal-header">
      <h4 class="modal-title">Edita aqui</h4>
      <button type="button" class="btn-close" aria-label="Close" (click)="activeModal.dismiss('Cross click')"></button>
    </div>
    <div class="modal-body">
     <label for="rfcI" class="form-label">RFC</label>
      <input #rfcI type="text" class="form-control"  value="{{docente.rfc}}">
      
     <label for="ClaveI" class="form-label">Clave Area</label>
      <input  #claveI type="text" class="form-control" value="{{docente.clave_area}}">

     <label for="curpI" class="form-label">CURP</label>
      <input  #curpI type="text" class="form-control" value="{{docente.curp}}">

     <label for="tarjetaI" class="form-label">No de Tajreta</label>
      <input #tarjetaI type="text" class="form-control" value="{{docente.no_tarjeta}}">

     <label for="estadoi" class="form-label">Estado</label>
      <input #estadoi type="text" class="form-control" value="{{docente.estado}}">

     <label for="nombreI" class="form-label">Nombre</label>
      <input #nombreI type="text" class="form-control" value="{{docente.nombre_completo}}">

     <label for="nombramientoI" class="form-label">Nombramiento</label>
      <input #nombramientoI type="text" class="form-control" value="{{docente.nombramiento}}">

     <label for="tipoI" class="form-label">Tipo</label>
      <input #tipoI type="text" class="form-control" value="{{docente.tipo}}">
      
      <label for="estadoI" class="form-label">Estado</label>
      <input #estadoI type="text" class="form-control" value="{{docente.estado}}">
      

    <button class="btn btn-lg btn-outline-primary" (click)="EditarUno(rfcI.value, claveI.value, curpI.value,tarjetaI.value, nombreI.value,nombramientoI.value,tipoI.value, estadoI.value )">Guardar</button>
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-outline-dark" (click)="activeModal.close('Close click')">Cerrar</button>
    </div>
  `
})

export class NgbdModalContent {
  @Input()
  docente!: Docente;
  @Input()
  indice!: number;


  constructor(public activeModal: NgbActiveModal) { }


  ngOnInit() {
    console.log(this.indice)
  }


  EditarUno(rfcP: String, claveP: String, curpIP: String, tarjetaP: String, nombreP: String, nombramientoP: String, tipoP: String, estadoP: String) {


    this.activeModal.close(
      {
        indice: { indice: this.indice },
        objeto: {
          rfc: rfcP,
          clave_area: claveP,
          curp: curpIP,
          no_tarjeta: tarjetaP,
          nombre_completo: nombreP,
          nombramiento: nombramientoP,
          tipo: tipoP,
          estado: estadoP,
        }
      }

    )

  }
}







@Component({
  selector: 'app-table-teacher',
  templateUrl: './table-teacher.component.html',
  styleUrls: ['./table-teacher.component.scss']
})
export class TableTeacherComponent {

  displayedColumns: string[] = ['RFC', 'Clave', 'Curp', 'NTarjeta', 'Nombre', 'Nombramiento', 'Tipo', 'Estado', 'Botones'];
  dataSource!: MatTableDataSource<Docente>;

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort)
  sort!: MatSort;


  constructor(public crud: CrudService, private modalService: NgbModal) {
    Valores.splice(0, Valores.length)
    this.crud.getTeachers().subscribe(data => {
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




  Editar(row: Docente) {
    const modalRef = this.modalService.open(NgbdModalContent);
    modalRef.componentInstance.docente = row;
    modalRef.componentInstance.indice = Valores.findIndex(Docente => Docente.rfc == row.rfc);


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
    otro = Valores.filter(item => item.rfc != id)
    Valores = otro;
    this.dataSource = new MatTableDataSource(Valores);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

  }


  guardarBD() {
    console.log("Guardado final")
  }




}




