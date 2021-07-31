import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BirdsEyeViewProblem } from 'src/app/core/models';

@Injectable({
  providedIn: 'root',
})
export class BirdsEyeViewService {
  constructor() {}

  getBirdsEyeViewProblems(): Observable<BirdsEyeViewProblem[]> {}
}
