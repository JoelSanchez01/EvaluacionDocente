import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDatabaseComponent } from './edit-database.component';

describe('EditDatabaseComponent', () => {
  let component: EditDatabaseComponent;
  let fixture: ComponentFixture<EditDatabaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditDatabaseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditDatabaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
