import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateProblemPageComponent } from './pages/create-problem-page/create-problem-page.component';
import { ProblemPageComponent } from './pages/problem-page/problem-page.component';
import { ProblemComponent } from './problem.component';

const routes: Routes = [
	{
		path: '',
		component: ProblemComponent,
		children: [
			{
				path: 'create',
				component: CreateProblemPageComponent,
			},
			{ path: ':id', component: ProblemPageComponent },
		],
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class ProblemRoutingModule {}
