import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SessionRoutingModule } from './session-routing.module';
import { SessionComponent } from './session/session.component';

@NgModule({
  imports: [
    CommonModule,
    SessionRoutingModule
  ],
  declarations: [SessionComponent]
})
export class SessionModule { }
