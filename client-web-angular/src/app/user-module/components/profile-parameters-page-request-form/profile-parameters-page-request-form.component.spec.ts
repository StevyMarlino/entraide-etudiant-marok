import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileParametersPageRequestFormComponent } from './profile-parameters-page-request-form.component';

describe('ProfileParamettersPageRequestFormComponent', () => {
  let component: ProfileParametersPageRequestFormComponent;
  let fixture: ComponentFixture<ProfileParametersPageRequestFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileParametersPageRequestFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileParametersPageRequestFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
