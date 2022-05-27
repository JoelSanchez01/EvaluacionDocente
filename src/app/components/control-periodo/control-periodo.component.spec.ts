import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlPeriodoComponent } from './control-periodo.component';

describe('ControlPeriodoComponent', () => {
  let component: ControlPeriodoComponent;
  let fixture: ComponentFixture<ControlPeriodoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ControlPeriodoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ControlPeriodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
