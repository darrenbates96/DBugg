import {
	FireStoreComment,
	FireStoreContactRecord,
	FireStoreProblem,
	FireStoreReply,
	ProblemSectionTypeFour,
	ProblemSectionTypeOne,
	ProblemSectionTypeThree,
	ProblemSectionTypeTwo,
	Section,
} from './models';

// Problem

export class ProblemClass implements FireStoreProblem {
	id = null;
	dateCreated = null;
	title = '';
	overview = '';
	tags = [];
	content = [];
	commentIds = [];
}

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

// Problem Section

export class ProblemSectionTypeOneClass implements ProblemSectionTypeOne {
	title = '';
	body = '';
}

export class ProblemSectionTypeTwoClass implements ProblemSectionTypeTwo {
	title = '';
	body = '';
	image = '';
}

export class ProblemSectionTypeThreeClass implements ProblemSectionTypeThree {
	title = '';
	firstBody = '';
	image = '';
	secondBody = '';
}

export class ProblemSectionTypeFourClass implements ProblemSectionTypeFour {
	title = '';
	image = '';
}

// Contact

export class ContactClass implements FireStoreContactRecord {
	id = null;
	email = '';
	content = '';
}
