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


@NgModule({
  declarations: [
    DashboardComponent,
    CustomerComponent,
    ModalComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    HttpClientModule,
    HighchartsChartModule ,
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,


    


  ],
  exports:[
    DashboardComponent
  ]
})
export class HomeModule { }
