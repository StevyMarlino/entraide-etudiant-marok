import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartsBarStudentsSchoolsComponent } from './charts-bar-students-schools.component';

describe('ChartsBarStudentsSchoolsComponent', () => {
  let component: ChartsBarStudentsSchoolsComponent;
  let fixture: ComponentFixture<ChartsBarStudentsSchoolsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChartsBarStudentsSchoolsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartsBarStudentsSchoolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
