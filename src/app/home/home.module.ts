import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SharedModule } from '../shared/shared.module';
import {HttpClientModule} from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { HighchartsChartModule } from 'highcharts-angular';
import { CustomerComponent } from './components/customer/customer.component';
import { ModalComponent } from './components/modal/modal.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { VehilcesComponent } from './components/vehilces/vehilces.component';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { VehilcesImagesComponent } from './components/vehilces-images/vehilces-images.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    DashboardComponent,
    CustomerComponent,
    ModalComponent,
    VehilcesComponent,
    VehilcesImagesComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    HttpClientModule,
    HighchartsChartModule ,
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    NgbDropdownModule ,
    RouterModule

  ],
  exports:[
    DashboardComponent
  ]
})
export class HomeModule { }