import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DashboardComponent} from "./dashboard.component";
import {DashboardRoutingModule} from "./dashboard-routing.module";
import {RouterModule} from "@angular/router";
import {SidebarModule} from "../shared/components/sidebar/sidebar.module";



@NgModule({
  declarations: [
    DashboardComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    RouterModule,
    SidebarModule,
  ]
})
export class DashboardModule { }
