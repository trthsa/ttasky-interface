import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskCellComponent } from './task-cell.component';

describe('TaskCellComponent', () => {
  let component: TaskCellComponent;
  let fixture: ComponentFixture<TaskCellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaskCellComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaskCellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
