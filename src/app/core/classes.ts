import {
	FireStoreComment,
	FireStoreContactRecord,
	FireStoreProblem,
	FireStoreReply,
	ProblemSectionTypeFour,
	ProblemSectionTypeOne,
	ProblemSectionTypeThree,
	ProblemSectionTypeTwo,
} from './models';

// Problem

export class FireStoreProblemClass implements FireStoreProblem {
	id = null;
	dateCreated = null;
	title = '';
	overview = '';
	tags = [];
	content = [];
	commentIds = [];
}

export class FireStoreCommentClass implements FireStoreComment {
	id = null;
	problemId = null;
	dateCreated = null;
	content = '';
	replyIds = [];
}

export class FireStoreReplyClass implements FireStoreReply {
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

export class FireStoreContactClass implements FireStoreContactRecord {
	id = null;
	email = '';
	content = '';
}
