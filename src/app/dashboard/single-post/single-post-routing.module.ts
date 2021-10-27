import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SinglePostComponent} from "./single-post.component";
import {RouterModule, Routes} from "@angular/router";

const routes: Routes = [
  {
    path: '',
    component: SinglePostComponent
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class SinglePostRoutingModule { }
