import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { BirdsEyeViewProblem } from 'src/app/core/models';

@Injectable({
	providedIn: 'root',
})
export class BirdsEyeViewService {
	constructor(private angularFireStore: AngularFirestore) {}

	getBirdsEyeViewProblems(): Observable<BirdsEyeViewProblem[]> {
		return this.angularFireStore
			.collection<BirdsEyeViewProblem>('birdseyeviewproblems')
			.valueChanges();
	}
}
