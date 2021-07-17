import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  Reply,
  Comment,
  Problem,
  FireStoreComment,
  FireStoreReply,
} from 'src/core/models';

@Injectable({
  providedIn: 'root',
})
export class ProblemService {
  constructor() {}

  getReplies(): Observable<Reply[]> {}

  getComments(): Observable<Comment[]> {}

  getProblem(): Observable<Problem> {}

  createComment(): Observable<FireStoreComment> {}

  createReply(): Observable<FireStoreReply> {}
}
