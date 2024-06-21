import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShiftTableBodyComponent } from './shift-table-body.component';

describe('ShiftTableBodyComponent', () => {
  let component: ShiftTableBodyComponent;
  let fixture: ComponentFixture<ShiftTableBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShiftTableBodyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShiftTableBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
