import { Component, Input, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { CrudService } from 'src/app/services/crud/crud.service';
import { Grupo } from "../../models/Grupo"
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
     <label for="periodo" class="form-label">Periodo</label>
      <input #periodoI type="text" class="form-control"  value="{{grupo.periodo}}">
      
     <label for="materiaI" class="form-label">Materia</label>
      <input  #materiaI type="text" class="form-control" id="Clave" value="{{grupo.materia}}">

     <label for="grupoI" class="form-label">Grupo</label>
      <input  #grupoI type="text" class="form-control" id="reticula" value="{{grupo.grupo}}">

     <label for="capacidadI" class="form-label">Capacidad</label>
      <input #capacidadI type="text" class="form-control" id="capacidad" value="{{grupo.capacidad}}">

     <label for="alumnosII" class="form-label">Alumnos Inscritos</label>
      <input #alumnosII type="text" class="form-control" id="alumnosII" value="{{grupo.alumnos_inscritos}}">


      <label for="rfcdI" class="form-label">RFC del docente</label>
      <input #rfcdI type="text" class="form-control" id="nip" value="{{grupo.rfc_docente}}">

    <button class="btn btn-lg btn-outline-primary" (click)="EditarUno(periodoI.value, materiaI.value, grupoI.value, capacidadI.value, alumnosII.value, rfcdI.value )">Guardar</button>
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-outline-dark" (click)="activeModal.close('Close click')">Cerrar</button>
    </div>
  `
})

export class NgbdModalContent {
  @Input()
  grupo!: any;
  @Input()
  indice!: number;


  constructor(public activeModal: NgbActiveModal) { }


  ngOnInit() {
    console.log(this.indice)
  }


  EditarUno(periodop: String, materiap: String, grupop: String, capacidadp: String, alumnos_inscritosp: String, rfc_docentep: String) {




    this.activeModal.close(
      {
        indice: { indice: this.indice },
        objeto: {
          periodo: periodop,
          materia: materiap,
          grupo: grupop,
          capacidad: capacidadp,
          alumnos_inscritos: alumnos_inscritosp,

          rfc_docente: rfc_docentep
        }
      }

    )

  }
}







@Component({
  selector: 'app-table-group',
  templateUrl: './table-group.component.html',
  styleUrls: ['./table-group.component.scss']
})
export class TableGroupComponent {

  displayedColumns: string[] = ['periodo', 'materia', 'grupo', 'capacidad', 'alumnosI', 'rfcdocente', 'Botones'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort)
  sort!: MatSort;


  constructor(public crud: CrudService, private modalService: NgbModal) {
    Valores.splice(0, Valores.length)
    this.crud.getGroup().subscribe(data => {
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
    modalRef.componentInstance.grupo = row;
    modalRef.componentInstance.indice = Valores.findIndex(Grupo => Grupo.grupo == row.grupo);


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
    otro = Valores.filter(item => item.grupo != id)
    Valores = otro;
    this.dataSource = new MatTableDataSource(Valores);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

  }


  guardarBD() {
    console.log("Guardado final")
  }




}




