import { Component, OnInit } from '@angular/core';
import { CommentClass, ReplyClass } from 'src/app/core/classes';
import { FireStoreComment, FireStoreReply, Problem } from 'src/app/core/models';

@Component({
  selector: 'app-problem-page',
  templateUrl: './problem-page.component.html',
  styleUrls: ['./problem-page.component.scss'],
})
export class ProblemPageComponent implements OnInit {
  problem: Problem = {} as Problem;
  comment: FireStoreComment = new CommentClass();
  reply: FireStoreReply = new ReplyClass();

  constructor() {}

  ngOnInit(): void {}
}
