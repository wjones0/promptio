import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PromptListComponent } from './prompt-list/prompt-list.component';
import { PromptViewComponent } from './prompt-view/prompt-view.component';

const routes: Routes = [
  { path: '', component: PromptListComponent },
  { path: ':promptID', component: PromptViewComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthorRoutingModule { }
