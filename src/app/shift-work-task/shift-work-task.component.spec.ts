import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShiftWorkTaskComponent } from './shift-work-task.component';

describe('ShiftWorkTaskComponent', () => {
  let component: ShiftWorkTaskComponent;
  let fixture: ComponentFixture<ShiftWorkTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShiftWorkTaskComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShiftWorkTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
