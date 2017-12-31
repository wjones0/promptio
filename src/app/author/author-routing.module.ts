import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PromptListComponent } from './prompt-list/prompt-list.component';

const routes: Routes = [
  { path: '', component: PromptListComponent },
  { path: ':promptID', component: PromptListComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthorRoutingModule { }
