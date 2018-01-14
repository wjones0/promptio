import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { reducers, effects } from './store';

import { PromptCommonModule } from '../prompt-common/prompt-common.module';

import { SessionRoutingModule } from './session-routing.module';
import { SessionComponent } from './session/session.component';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('sessionModule', reducers),
    EffectsModule.forFeature(effects),
    PromptCommonModule,
    SessionRoutingModule
  ],
  declarations: [SessionComponent]
})
export class SessionModule { }
