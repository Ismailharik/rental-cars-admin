import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { CustomizeConfigComponent } from './components/customize-config/customize-config.component';
import { RouterModule } from '@angular/router';
import { NgbToastModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastsComponent } from './components/toasts/toasts.component';



@NgModule({
  declarations: [
    FooterComponent,
    NavbarComponent,
    SidebarComponent,
    CustomizeConfigComponent,
    ToastsComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    NgbToastModule,

  ],
  exports:[
    FooterComponent,
    NavbarComponent,
    SidebarComponent,
    CustomizeConfigComponent,
    ToastsComponent

  ]
})
export class SharedModule { }
