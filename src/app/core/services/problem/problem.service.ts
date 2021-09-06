import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { BirdsEyeViewProblem, FireStoreProblem } from 'src/app/core/models';
import { BirdsEyeViewService } from '../birds-eye-view/birds-eye-view.service';

@Injectable({
	providedIn: 'root',
})
export class ProblemService {
	constructor(
		private angularFireStore: AngularFirestore,
		private birdsEyeViewService: BirdsEyeViewService
	) {}

	createProblem(problem: FireStoreProblem): void {
		const problemReference = this.angularFireStore
			.collection<FireStoreProblem>('problems')
			.doc();
		problemReference.set({
			...problem,
			id: problemReference.ref.id,
		});

		this.birdsEyeViewService.createBirdsEyeViewProblem({
			problemId: problemReference.ref.id,
			dateCreated: Date.now(),
			title: problem.title,
			tags: problem.tags,
			overview: problem.overview,
		});
	}

	// getReplies(): Observable<Reply[]> {}

	// getComments(): Observable<Comment[]> {}

	// getProblem(): Observable<Problem> {}

	// createComment(): Observable<FireStoreComment> {}

	// createReply(): Observable<FireStoreReply> {}
}
