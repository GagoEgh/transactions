import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LengthByTypePipe } from './length-by-type.pipe';


@NgModule({
  declarations: [LengthByTypePipe],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    
  ],
  exports:[
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    LengthByTypePipe,
  ]
})
export class SharedModule { }
