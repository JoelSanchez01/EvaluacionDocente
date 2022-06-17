import { Component, Input, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { CrudService } from 'src/app/services/crud/crud.service';
import { Periodo } from "../../models/Periodo"
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';




var Valores: Periodo[] = [];


@Component({
  selector: 'ngbd-modal-content',
  template: `
    <div class="modal-header">
      <h4 class="modal-title">Edita aqui</h4>
      <button type="button" class="btn-close" aria-label="Close" (click)="activeModal.dismiss('Cross click')"></button>
    </div>
    <div class="modal-body">
     <label for="periodoI" class="form-label">Periodo</label>
      <input #periodoI type="text" class="form-control"  value="{{periodo.periodo}}">
      

      <label for="largaI" class="form-label">ID Larga</label>
      <input  #largaI type="text" class="form-control" value="{{periodo.id_larga}}">


      <label for="cortaI" class="form-label">ID Corta</label>
      <input #cortaI type="text" class="form-control"  value="{{periodo.id_corta}}">

     <label for="estadoI" class="form-label">Estado</label>
      <input  #estadoI type="text" class="form-control" value="{{periodo.estado}}">

  

    <button class="btn btn-lg btn-outline-primary" (click)="EditarUno(periodoI.value, largaI.value, cortaI.value, estadoI.value )">Guardar</button>
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-outline-dark" (click)="activeModal.close('Close click')">Cerrar</button>
    </div>
  `
})

export class NgbdModalContent {
  @Input()
  periodo!: Periodo;
  @Input()
  indice!: number;


  constructor(public activeModal: NgbActiveModal) { }


  ngOnInit() {
    console.log(this.indice)
  }

  EditarUno(periodoP: String, largaP: String, cortaP: String, estadoP: String) {


    this.activeModal.close(
      {
        indice: { indice: this.indice },
        objeto: {
          periodo: periodoP,
          id_larga: largaP,
          id_corta: cortaP,
          estado: estadoP,

        }
      }

    )

  }
}








@Component({
  selector: 'app-table-period',
  templateUrl: './table-period.component.html',
  styleUrls: ['./table-period.component.scss']
})
export class TablePeriodComponent {

  displayedColumnsAlumnos: string[] = ['periodo', 'id_larga', 'id_corta', 'estado', 'Botones'];
  dataSource!: MatTableDataSource<Periodo>;

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort)
  sort!: MatSort;


  constructor(public crud: CrudService, private modalService: NgbModal) {
    Valores.splice(0, Valores.length)
    this.crud.getPeriod().subscribe(data => {
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




  Editar(row: Periodo) {
    const modalRef = this.modalService.open(NgbdModalContent);
    modalRef.componentInstance.periodo = row;
    modalRef.componentInstance.indice = Valores.findIndex(Periodo => Periodo.periodo == row.periodo);


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
    otro = Valores.filter(item => item.periodo != id)
    Valores = otro;
    this.dataSource = new MatTableDataSource(Valores);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

  }


  guardarBD() {
    console.log("Guardado final")
  }




}









