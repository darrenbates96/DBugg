import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BirdsEyeViewProblem } from 'src/app/core/models';

@Component({
	selector: 'app-birds-eye-view-problem',
	templateUrl: './birds-eye-view-problem.component.html',
	styleUrls: ['./birds-eye-view-problem.component.scss'],
})
export class BirdsEyeViewProblemComponent implements OnInit {
	@Input() birdsEyeViewProblem: BirdsEyeViewProblem =
		{} as BirdsEyeViewProblem;

	constructor(private router: Router) {}

	ngOnInit(): void {}

	performNavigateToProblem() {
		this.router.navigate([
			`/problem/${this.birdsEyeViewProblem.problemId}`,
		]);
	}
}
