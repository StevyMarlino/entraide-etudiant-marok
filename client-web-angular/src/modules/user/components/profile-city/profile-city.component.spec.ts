import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileCityComponent } from './profile-city.component';

describe('ProfileParamettersPageCityFormComponent', () => {
  let component: ProfileCityComponent;
  let fixture: ComponentFixture<ProfileCityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileCityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileCityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
