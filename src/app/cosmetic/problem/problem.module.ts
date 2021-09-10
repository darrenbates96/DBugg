// Module Imports

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProblemRoutingModule } from './problem-routing.module';

// Component Imports

import { ProblemComponent } from './problem.component';
import { ProblemPageComponent } from './pages/problem-page/problem-page.component';
import { CreateProblemPageComponent } from './pages/create-problem-page/create-problem-page.component';

@NgModule({
	declarations: [
		ProblemComponent,
		ProblemPageComponent,
		CreateProblemPageComponent,
	],
	imports: [CommonModule, FormsModule, ProblemRoutingModule],
})
export class ProblemModule {}
