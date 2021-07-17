import { Component, OnInit } from '@angular/core';
import { BirdsEyeViewProblem } from 'src/app/core/models';

@Component({
  selector: 'app-birds-eye-view-page',
  templateUrl: './birds-eye-view-page.component.html',
  styleUrls: ['./birds-eye-view-page.component.scss'],
})
export class BirdsEyeViewPageComponent implements OnInit {
  birdsEyeViewProblems: BirdsEyeViewProblem[] = [];

  constructor() {}

  ngOnInit(): void {}
}
