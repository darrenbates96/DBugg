import { Component, OnInit } from '@angular/core';
import { FireStoreProblemClass } from 'src/app/core/classes';
import { FireStoreProblem } from 'src/app/core/models';
import { ProblemService } from 'src/app/core/services/problem/problem.service';

@Component({
	selector: 'app-create-problem-page',
	templateUrl: './create-problem-page.component.html',
	styleUrls: ['./create-problem-page.component.scss'],
})
export class CreateProblemPageComponent implements OnInit {
	problem: FireStoreProblem = new FireStoreProblemClass();

	constructor(private problemService: ProblemService) {}

	ngOnInit(): void {}

	performCreateProblem(): void {}
}
