import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileParametersPageCityFormComponent } from './profile-parameters-page-city-form.component';

describe('ProfileParamettersPageCityFormComponent', () => {
  let component: ProfileParametersPageCityFormComponent;
  let fixture: ComponentFixture<ProfileParametersPageCityFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileParametersPageCityFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileParametersPageCityFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
