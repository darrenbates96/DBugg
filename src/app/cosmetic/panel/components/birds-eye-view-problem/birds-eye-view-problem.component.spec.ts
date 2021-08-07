import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BirdsEyeViewProblemComponent } from './birds-eye-view-problem.component';

describe('BirdsEyeViewProblemComponent', () => {
  let component: BirdsEyeViewProblemComponent;
  let fixture: ComponentFixture<BirdsEyeViewProblemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BirdsEyeViewProblemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BirdsEyeViewProblemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
