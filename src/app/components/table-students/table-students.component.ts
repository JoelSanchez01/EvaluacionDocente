import { Component, Input, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { CrudService } from 'src/app/services/crud/crud.service';
import { Alumno } from "../../models/Alumno"
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';




var Valores: Alumno[] = [];


@Component({
  selector: 'ngbd-modal-content',
  template: `
    <div class="modal-header">
      <h4 class="modal-title">Edita aqui</h4>
      <button type="button" class="btn-close" aria-label="Close" (click)="activeModal.dismiss('Cross click')"></button>
    </div>
    <div class="modal-body">
     <label for="control" class="form-label">Numero de Control</label>
      <input #controlI type="text" class="form-control"  value="{{alumno.control}}">
      
     <label for="reticula" class="form-label">Clave</label>
      <input  #claveI type="text" class="form-control" id="Clave" value="{{alumno.clave_carrera}}">

     <label for="reticula" class="form-label">Reticula</label>
      <input  #reticulaI type="text" class="form-control" id="reticula" value="{{alumno.reticula}}">

     <label for="semestre" class="form-label">Semestre</label>
      <input #semestreI type="text" class="form-control" id="semestre" value="{{alumno.semestre}}">

     <label for="estado" class="form-label">Estado</label>
      <input #estadoI type="text" class="form-control" id="estado" value="{{alumno.estado}}">

     <label for="plan" class="form-label">Plan</label>
      <input #planI type="text" class="form-control" id="plan" value="{{alumno.plan_estudios}}">

     <label for="nombre" class="form-label">Nombre</label>
      <input #nombreI type="text" class="form-control" id="nombre" value="{{alumno.nombre_completo}}">

     <label for="nip" class="form-label">NIP</label>
      <input #nipI type="text" class="form-control" id="nip" value="{{alumno.nip}}">

    <button class="btn btn-lg btn-outline-primary" (click)="EditarUno(controlI.value, claveI.value, reticulaI.value, semestreI.value, estadoI.value, planI.value, nombreI.value, nipI.value )">Guardar</button>
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-outline-dark" (click)="activeModal.close('Close click')">Cerrar</button>
    </div>
  `
})

export class NgbdModalContent {
  @Input()
  alumno!: Alumno;
  @Input()
  indice!: number;


  constructor(public activeModal: NgbActiveModal) { }


  ngOnInit() {
    console.log(this.indice)
  }


  EditarUno(controlP: String, claveP: String, reticulaP: String, semestreP: String, estadoP: String, planP: String, nombreP: String, nipP: String) {


    this.activeModal.close(
      {
        indice: { indice: this.indice },
        objeto: {
          control: controlP,
          clave_carrera: claveP,
          reticula: reticulaP,
          semestre: semestreP,
          estado: estadoP,
          plan_estudios: planP,
          nombre_completo: nombreP,
          nip: nipP,
        }
      }

    )

  }
}







@Component({
  selector: 'app-table-students',
  templateUrl: './table-students.component.html',
  styleUrls: ['./table-students.component.scss']
})
export class TableStudentsComponent {

  displayedColumns: string[] = ['NC', 'Clave', 'Reticula', 'Semestre', 'Estado', 'planEstudios', 'Nombre', 'NIP', 'Botones'];
  dataSource!: MatTableDataSource<Alumno>;

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort)
  sort!: MatSort;


  constructor(public crud: CrudService, private modalService: NgbModal) {
    Valores.splice(0, Valores.length)
    this.crud.getStudent().subscribe(data => {
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




  Editar(row: Alumno) {
    const modalRef = this.modalService.open(NgbdModalContent);
    modalRef.componentInstance.alumno = row;
    modalRef.componentInstance.indice = Valores.findIndex(Alumno => Alumno.control == row.control);


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
    otro = Valores.filter(item => item.control != id)
    Valores = otro;
    this.dataSource = new MatTableDataSource(Valores);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

  }


  guardarBD() {
    console.log("Guardado final")
  }




}


