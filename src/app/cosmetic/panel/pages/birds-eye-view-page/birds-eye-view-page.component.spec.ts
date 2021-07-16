import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BirdsEyeViewPageComponent } from './birds-eye-view-page.component';

describe('BirdsEyeViewPageComponent', () => {
  let component: BirdsEyeViewPageComponent;
  let fixture: ComponentFixture<BirdsEyeViewPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BirdsEyeViewPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BirdsEyeViewPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
