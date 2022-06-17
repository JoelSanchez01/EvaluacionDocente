import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablePeriodComponent } from './table-period.component';

describe('TablePeriodComponent', () => {
  let component: TablePeriodComponent;
  let fixture: ComponentFixture<TablePeriodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TablePeriodComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TablePeriodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
