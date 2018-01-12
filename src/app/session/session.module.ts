import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreModule } from '@ngrx/store';

import { reducers } from './store';

import { PromptCommonModule } from '../prompt-common/prompt-common.module';

import { SessionRoutingModule } from './session-routing.module';
import { SessionComponent } from './session/session.component';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('sessionModule', reducers),
    PromptCommonModule,
    SessionRoutingModule
  ],
  declarations: [SessionComponent]
})
export class SessionModule { }
