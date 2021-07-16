import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./cosmetic/panel/panel.module').then((m) => m.PanelModule),
  },
  {
    path: 'problem',
    loadChildren: () =>
      import('./cosmetic/problem/problem.module').then((m) => m.ProblemModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
