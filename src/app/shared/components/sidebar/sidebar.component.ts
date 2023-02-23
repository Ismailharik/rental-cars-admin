import { Component, OnInit, TemplateRef } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';
import { KeycloakProfile } from 'keycloak-js';
import { SharedService } from 'src/app/shared.service';
import { ToastService } from '../toasts/toast-service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {

  tmp: boolean = false
  color: number = 1
  colorSwitch!: string;
  public profile !: KeycloakProfile
  fullName !: string


  constructor(public sharedService: SharedService,
    private readonly keycloakService: KeycloakService,
    public toastService: ToastService) {
  }

  public async ngOnInit() {
    this.sharedService.colorSwitch.subscribe(color => this.colorSwitch = color);
    this.profile = await this.keycloakService.loadUserProfile()
    this.fullName = this.profile.firstName + ' ' + this.profile.lastName
  }

  switch(selected: number) {
    this.color = selected
  }
  logout() {
    this.keycloakService.logout()
  }
  showSuccess() {
    this.toastService.show('I am a success toast', { classname: 'bg-success text-light', delay: 10000 });
  }
  isTemplate(toast: any) {
    return toast.textOrTpl instanceof TemplateRef;
  }
}
