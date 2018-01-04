import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { reducers, effects } from './store';

import { PromptCommonModule } from '../prompt-common/prompt-common.module';

import { AuthorRoutingModule } from './author-routing.module';
import { PromptListComponent } from './prompt-list/prompt-list.component';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('promptModule', reducers),
    EffectsModule.forFeature(effects),
    PromptCommonModule,
    AuthorRoutingModule
  ],
  declarations: [PromptListComponent]
})
export class AuthorModule { }
