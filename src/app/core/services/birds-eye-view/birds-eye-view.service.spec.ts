import { TestBed } from '@angular/core/testing';

import { BirdsEyeViewService } from './birds-eye-view.service';

describe('BirdsEyeViewService', () => {
  let service: BirdsEyeViewService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BirdsEyeViewService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
