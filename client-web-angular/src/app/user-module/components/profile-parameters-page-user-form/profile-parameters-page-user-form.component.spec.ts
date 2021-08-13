import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileParametersPageUserFormComponent } from './profile-parameters-page-user-form.component';

describe('ProfileParamettersPageUserFormComponent', () => {
  let component: ProfileParametersPageUserFormComponent;
  let fixture: ComponentFixture<ProfileParametersPageUserFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileParametersPageUserFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileParametersPageUserFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
