import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// material things
import {
  MatButtonModule,
  MatIconModule,
  MatToolbarModule,
} from '@angular/material';

// ngrx things
import { StoreModule } from '@ngrx/store';

import { TopnavComponent } from './components/topnav/topnav.component';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    StoreModule.forFeature('common', {}),
  ],
  declarations: [
    TopnavComponent
  ],
  exports: [
    TopnavComponent
  ]
})
export class PromptCommonModule { }
