import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// material things
import {
  MatButtonModule,
  MatIconModule,
  MatMenuModule,
  MatToolbarModule,
} from '@angular/material';

// ngrx things
import { StoreModule } from '@ngrx/store';

import { TopnavComponent } from './components/topnav/topnav.component';
import { MatMenuItem } from '@angular/material/menu/typings/menu-item';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
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
