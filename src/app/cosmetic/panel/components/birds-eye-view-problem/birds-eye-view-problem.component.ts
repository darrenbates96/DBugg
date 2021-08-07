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

	animateButton: boolean = false;

	constructor(private router: Router) {}

	ngOnInit(): void {}

	performNavigateToProblemWithAnimation() {
		this.animateButtonHelper();
		setTimeout(() => {
			this.router.navigate([
				`/problem/${this.birdsEyeViewProblem.problemId}`,
			]);
		}, 400);
	}

	performNavigateToProblem() {
		this.router.navigate([
			`/problem/${this.birdsEyeViewProblem.problemId}`,
		]);
	}

	animateButtonHelper() {
		this.animateButton = true;
		setTimeout(() => {
			this.animateButton = false;
		}, 200);
	}
}
