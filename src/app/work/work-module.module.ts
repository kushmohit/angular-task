import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
 
import { WorkRoutingModule } from './work-routing.module';

import { LeftChildComponent } from './left-child/left-child.component';
import { RightChildComponent } from './right-child/right-child.component';
import { WorkComponent } from './work.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
     
    LeftChildComponent,
    RightChildComponent,
    WorkComponent
  ],
  imports: [
    CommonModule,
    WorkRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
  
})
export class WorkModuleModule { }
