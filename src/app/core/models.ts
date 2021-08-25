// Type

export type PanelItem = 'Birds Eye View' | 'About' | 'Contact';

// FireStore

export interface FireStoreProblem {
	id: number;
	dateCreated: Date;
	title: string;
	overview: string;
	tags: string[];
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

// Problem

export interface Problem {
	id: number;
	dateCreated: Date;
	title: string;
	overview: string;
	tags: string[];
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

// Problem Section

export interface ProblemSectionTypeOne {
	title: string;
	body: string;
}

export interface ProblemSectionTypeTwo {
	title: string;
	body: string;
	image: string;
}

export interface ProblemSectionTypeThree {
	title: string;
	firstBody: string;
	image: string;
	secondBody: string;
}

export interface ProblemSectionTypeFour {
	title: string;
	image: string;
}

// Birds Eye View

export interface BirdsEyeViewProblem {
	problemId: string;
	dateCreated: Date;
	title: string;
	tags: string[];
	overview: string;
}

// Navigation Bar

export interface NavigationBarItem {
	item: PanelItem;
	path: string;
}
