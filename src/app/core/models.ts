// Types

export type PanelItem = 'Birds Eye View' | 'About' | 'Contact';

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
  id: number | null;
  problemId: number | null;
  dateCreated: Date | null;
  content: string;
  replyIds: number[];
}

export interface FireStoreReply {
  id: number | null;
  commentId: number | null;
  dateCreated: Date | null;
  content: string;
}

export interface FireStoreContactRecord {
  id: number | null;
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

// Navigation Bar

export interface NavigationBarItem {
  item: PanelItem;
  path: string;
}
