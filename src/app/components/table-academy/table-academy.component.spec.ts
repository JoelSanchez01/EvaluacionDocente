import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableAcademyComponent } from './table-academy.component';

describe('TableAcademyComponent', () => {
  let component: TableAcademyComponent;
  let fixture: ComponentFixture<TableAcademyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableAcademyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableAcademyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
