import {
  FireStoreComment,
  FireStoreContactRecord,
  FireStoreReply,
} from './models';

// Problem

export class CommentClass implements FireStoreComment {
  id = null;
  problemId = null;
  dateCreated = null;
  content = '';
  replyIds = [];
}

export class ReplyClass implements FireStoreReply {
  id = null;
  commentId = null;
  dateCreated = null;
  content = '';
}

// Contact

export class ContactClass implements FireStoreContactRecord {
  id = null;
  email = '';
  content = '';
}
