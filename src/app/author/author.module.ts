import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthorRoutingModule } from './author-routing.module';
import { PromptListComponent } from './prompt-list/prompt-list.component';

@NgModule({
  imports: [
    CommonModule,
    AuthorRoutingModule
  ],
  declarations: [PromptListComponent]
})
export class AuthorModule { }
