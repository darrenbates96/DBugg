// FireStore Models

export interface FireStoreProblem {
  id: number;
  dateCreated: Date;
  title: string;
  tags: string[];
  overview: string;
  content: string;
  commentIds: number[];
}

export interface FireStoreComment {
  id: number;
  problemId: number;
  dateCreated: Date;
  content: string;
  replyIds: number[];
}

export interface FireStoreReply {
  id: number;
  commentId: number;
  dateCreated: Date;
  content: string;
}

export interface FireStoreContactRecord {
  id: number;
  email: string;
  content: string;
}

// Birds Eye View

export interface BirdsEyeViewProblem {
  id: number;
  dateCreated: Date;
  title: string;
  tags: string[];
  overview: string;
}

// Problem

export interface Problem {
  id: number;
  dateCreated: Date;
  title: string;
  tags: string[];
  overview: string;
  content: string;
  comments: Comment[];
}

export interface Comment {
  id: number;
  dateCreated: Date;
  content: string;
  replies: Reply[];
}

export interface Reply {
  id: number;
  dateCreated: Date;
  content: string;
}
