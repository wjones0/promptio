import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'author' },
  {
    path: 'author',
    loadChildren: './author/author.module#AuthorModule',
  },
  {
    path: 'session',
    loadChildren: './session/session.module#SessionModule',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
