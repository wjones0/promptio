import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  MatButtonModule,
} from '@angular/material';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { reducers, effects } from './store';

import { PromptCommonModule } from '../prompt-common/prompt-common.module';

import { SessionService, PromptService } from './services';

import { SessionRoutingModule } from './session-routing.module';
import { SessionComponent } from './session/session.component';
import { ViewerComponent } from './components/viewer/viewer.component';
import { RoleSelectorComponent } from './components/role-selector/role-selector.component';
import { ControllerComponent } from './components/controller/controller.component';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    StoreModule.forFeature('sessionModule', reducers),
    EffectsModule.forFeature(effects),
    PromptCommonModule,
    SessionRoutingModule
  ],
  declarations: [
    SessionComponent,
    ViewerComponent,
    RoleSelectorComponent,
    ControllerComponent
  ],
  providers: [
    SessionService,
    PromptService
  ]
})
export class SessionModule { }
