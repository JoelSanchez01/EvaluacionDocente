import { AfterViewInit, Component, Input, KeyValueDiffers, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { CrudService } from 'src/app/services/crud/crud.service';
import { Alumno } from "../../models/Alumno"
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'ngbd-modal-content',
  template: `
    <div class="modal-header">
      <h4 class="modal-title">Hi there!</h4>
      <button type="button" class="btn-close" aria-label="Close" (click)="activeModal.dismiss('Cross click')"></button>
    </div>
    <div class="modal-body">
     <label for="control" class="form-label">Numero de Control</label>
      <input type="text" class="form-control"  value="{{alumno.control}}">

     <label for="reticula" class="form-label">Reticula</label>
      <input type="text" class="form-control" id="reticula" value="{{alumno.reticula}}">

     <label for="semestre" class="form-label">Semestre</label>
      <input type="text" class="form-control" id="semestre" value="{{alumno.semestre}}">

    
     <label for="estado" class="form-label">Estado</label>
      <input type="text" class="form-control" id="estado" value="{{alumno.estado}}">

     <label for="plan" class="form-label">Plan</label>
      <input type="text" class="form-control" id="plan" value="{{alumno.plan_estudios}}">

     <label for="nombre" class="form-label">Nombre</label>
      <input type="text" class="form-control" id="nombre" value="{{alumno.nombre_completo}}">

     <label for="nip" class="form-label">NIP</label>
      <input type="text" class="form-control" id="nip" value="{{alumno.nip}}">

    <button class="btn btn-lg btn-outline-primary" (click)="open(alumno.control)">Launch demo modal</button>
    </div>








    <div class="modal-footer">
      <button type="button" class="btn btn-outline-dark" (click)="activeModal.close('Close click')">Close</button>
    </div>
  `
})

export class NgbdModalContent {
  @Input() alumno: any;
  @Input() indice: any;


  constructor(private modalService: NgbModal, public activeModal: NgbActiveModal) { }


  ngOnInit() {
    let controlModel = Valores[this.indice].control;

  }


  open(id: any) {
    // console.log();
    console.log(this.alumno)
  }

}



var Valores: any[] = [];



@Component({
  selector: 'app-table-academy',
  templateUrl: './table-academy.component.html',
  styleUrls: ['./table-academy.component.scss']
})
export class TableAcademyComponent {

  displayedColumnsAlumnos: string[] = ['Descripcion', 'Clave', 'Tipo', 'Botones'];
  dataSource!: MatTableDataSource<Alumno>;

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort)
  sort!: MatSort;



  cargando: boolean = true;

  constructor(public crud: CrudService, private modalService: NgbModal) {
    Valores.splice(0, Valores.length)
    this.crud.getAcademy().subscribe(data => {
      Valores = data;
      this.dataSource = new MatTableDataSource(Valores);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      this.cargando = false;
    })
  }


  private iterador = 1;

  Editar(row: any) {
    const modalRef = this.modalService.open(NgbdModalContent);
    modalRef.componentInstance.alumno = row;
    modalRef.componentInstance.indice = Valores.findIndex(Alumno => Alumno.control == row.control);


  }



  AlumnosDisabled: boolean = true;



  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

















  otro: any[] = [];



  Borrar(id: any) {
    this.otro = Valores.filter(item => item.clave != id)
    Valores = this.otro;
    this.dataSource = new MatTableDataSource(Valores);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.cargando = false;


  }




  Mostrar(a: any) {
    console.log(a.target.value)
  }



}



