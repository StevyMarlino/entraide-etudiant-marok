import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileParametersPageInfoCardComponent } from './profile-parameters-page-info-card.component';

describe('ProfileParamettersPageInfoCardComponent', () => {
  let component: ProfileParametersPageInfoCardComponent;
  let fixture: ComponentFixture<ProfileParametersPageInfoCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileParametersPageInfoCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileParametersPageInfoCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
