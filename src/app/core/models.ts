// Type

export type PanelItem = 'Birds Eye View' | 'About' | 'Contact';
export type ProblemSectionType = 'one' | 'two' | 'three' | 'four';

// FireStore

export interface FireStoreProblem {
	id: number | null;
	dateCreated: Date | null;
	title: string;
	overview: string;
	tags: string[];
	content: Section[];
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

// Problem

export interface Section {
	sectionType: ProblemSectionType;
	sectionContent:
		| ProblemSectionTypeOne
		| ProblemSectionTypeTwo
		| ProblemSectionTypeThree
		| ProblemSectionTypeFour;
}

export interface Problem {
	id: number;
	dateCreated: Date;
	title: string;
	overview: string;
	tags: string[];
	content: Section[];
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
