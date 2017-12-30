import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PromptCommonModule } from '../prompt-common/prompt-common.module';

import { AuthorRoutingModule } from './author-routing.module';
import { PromptListComponent } from './prompt-list/prompt-list.component';

@NgModule({
  imports: [
    CommonModule,
    PromptCommonModule,
    AuthorRoutingModule
  ],
  declarations: [PromptListComponent]
})
export class AuthorModule { }
