import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileParametersPageComponent } from './profile-parameters-page.component';

describe('ProfileParamettersPageComponent', () => {
  let component: ProfileParametersPageComponent;
  let fixture: ComponentFixture<ProfileParametersPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileParametersPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileParametersPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
