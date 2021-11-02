import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';


const routs: Routes = [

  {
    path: '', component: ListComponent,
    // children: [
    //   { path: '', redirectTo: '', pathMatch: 'full' },
    //   { path: '', loadChildren: () => import('./typs/typs.module').then(m => m.TypsModule) },
    // ]
  },
]

@NgModule({
  declarations: [
    ListComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    RouterModule.forChild(routs),
  ],
  exports: [RouterModule]
})
export class NavigatorModule { }
