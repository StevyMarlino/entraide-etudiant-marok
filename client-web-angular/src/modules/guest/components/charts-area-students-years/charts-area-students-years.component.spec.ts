import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartsAreaStudentsYearsComponent } from './charts-area-students-years.component';

describe('ChartsStudentsYearsComponent', () => {
  let component: ChartsAreaStudentsYearsComponent;
  let fixture: ComponentFixture<ChartsAreaStudentsYearsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChartsAreaStudentsYearsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartsAreaStudentsYearsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
