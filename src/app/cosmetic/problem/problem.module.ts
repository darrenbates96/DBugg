import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProblemRoutingModule } from './problem-routing.module';

import { ProblemComponent } from './problem.component';
import { ProblemPageComponent } from './pages/problem-page/problem-page.component';
import { CreateProblemPageComponent } from './pages/create-problem-page/create-problem-page.component';

@NgModule({
  declarations: [ProblemComponent, ProblemPageComponent, CreateProblemPageComponent],
  imports: [CommonModule, ProblemRoutingModule],
})
export class ProblemModule {}
