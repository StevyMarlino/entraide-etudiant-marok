import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartsPieStudentsCitiesComponent } from './charts-pie-students-cities.component';

describe('ChartsStudentsCitiesComponent', () => {
  let component: ChartsPieStudentsCitiesComponent;
  let fixture: ComponentFixture<ChartsPieStudentsCitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChartsPieStudentsCitiesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartsPieStudentsCitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
