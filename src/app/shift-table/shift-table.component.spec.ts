import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShiftTableComponent } from './shift-table.component';

describe('ShiftTableComponent', () => {
  let component: ShiftTableComponent;
  let fixture: ComponentFixture<ShiftTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShiftTableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShiftTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
