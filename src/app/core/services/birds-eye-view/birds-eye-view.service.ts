import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BirdsEyeViewProblem } from 'src/core/models';

@Injectable({
  providedIn: 'root',
})
export class BirdsEyeViewService {
  constructor() {}

  getBirdsEyeViewProblems(): Observable<BirdsEyeViewProblem[]> {}
}
