import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { FireStoreProblem } from 'src/app/core/models';

@Injectable({
	providedIn: 'root',
})
export class ProblemService {
	constructor(private angularFireStore: AngularFirestore) {}

	createProblem(problem: FireStoreProblem): void {
		const problemReference = this.angularFireStore
			.collection<FireStoreProblem>('problems')
			.doc();
		problemReference.set({
			...problem,
			id: problemReference.ref.id,
		});
	}

	// getReplies(): Observable<Reply[]> {}

	// getComments(): Observable<Comment[]> {}

	// getProblem(): Observable<Problem> {}

	// createComment(): Observable<FireStoreComment> {}

	// createReply(): Observable<FireStoreReply> {}
}
