import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
import { BirdsEyeViewProblem } from 'src/app/core/models';

@Injectable({
	providedIn: 'root',
})
export class BirdsEyeViewService {
	constructor(private angularFireStore: AngularFirestore) {}

	getBirdsEyeViewProblems() {
		return this.angularFireStore
			.collection<BirdsEyeViewProblem>('birdseyeviewproblems')
			.valueChanges();
	}
}
