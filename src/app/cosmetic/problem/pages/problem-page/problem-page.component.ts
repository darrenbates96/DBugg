import { Component, OnInit } from '@angular/core';
import { Problem } from 'src/app/core/models';

@Component({
  selector: 'app-problem-page',
  templateUrl: './problem-page.component.html',
  styleUrls: ['./problem-page.component.scss'],
})
export class ProblemPageComponent implements OnInit {
  problem: Problem = {} as Problem;

  constructor() {}

  ngOnInit(): void {}
}
