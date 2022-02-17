import { NgModule } from '@angular/core';

import { MatDividerModule } from '@angular/material/divider';
import {MatInputModule} from '@angular/material/input';
import { MatListModule } from '@angular/material/list';



@NgModule({
  imports: [
    MatDividerModule,
    MatInputModule,
    MatListModule
  ],
  exports: [
    MatDividerModule,
    MatInputModule,
    MatListModule
  ]
})
export class MaterialModule { }
