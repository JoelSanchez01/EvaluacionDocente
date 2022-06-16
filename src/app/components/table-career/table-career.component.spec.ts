import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableCareerComponent } from './table-career.component';

describe('TableCareerComponent', () => {
  let component: TableCareerComponent;
  let fixture: ComponentFixture<TableCareerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableCareerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableCareerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
