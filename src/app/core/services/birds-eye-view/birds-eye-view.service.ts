import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { BehaviorSubject, Observable } from 'rxjs';
import { BirdsEyeViewProblem } from 'src/app/core/models';

@Injectable({
	providedIn: 'root',
})
export class BirdsEyeViewService {
	private readonly _birdsEyeViewProblems = new BehaviorSubject<
		BirdsEyeViewProblem[]
	>([]);

	readonly birdsEyeViewProblems$: Observable<BirdsEyeViewProblem[]> =
		this._birdsEyeViewProblems.asObservable();

	constructor(private angularFireStore: AngularFirestore) {}

	private _setBirdsEyeViewProblems(
		birdsEyeViewProblems: BirdsEyeViewProblem[]
	): void {
		this._birdsEyeViewProblems.next(birdsEyeViewProblems);
	}

	readBirdsEyeViewProblems(): void {
		this.angularFireStore
			.collection<BirdsEyeViewProblem>('birdseyeviewproblems')
			.valueChanges()
			.subscribe((birdsEyeViewProblems) => {
				if (birdsEyeViewProblems) {
					this._setBirdsEyeViewProblems(birdsEyeViewProblems);
				}
			});
	}

	createBirdsEyeViewProblem(birdsEyeViewProblem: BirdsEyeViewProblem): void {
		this.angularFireStore
			.collection<BirdsEyeViewProblem>('birdseyeviewproblems')
			.add(birdsEyeViewProblem);
	}
}
