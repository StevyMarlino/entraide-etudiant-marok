import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileParametersPageSchoolFormComponent } from './profile-parameters-page-school-form.component';

describe('ProfileParamettersPageSchoolFormComponent', () => {
  let component: ProfileParametersPageSchoolFormComponent;
  let fixture: ComponentFixture<ProfileParametersPageSchoolFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileParametersPageSchoolFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileParametersPageSchoolFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
