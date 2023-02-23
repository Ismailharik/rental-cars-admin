import { Component, OnInit } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';
import { KeycloakProfile } from 'keycloak-js';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  tmp:boolean=false
  color:number=1
  colorSwitch!: string;
  public profile !:KeycloakProfile
  fullName !:string
  constructor(public sharedService:SharedService,private readonly keycloakService:KeycloakService) { 
  }

  public async ngOnInit() {
    //this.isLogueado=this.keycloakService.isLoggedIn( )

    // this.sharedService.colorSwitch.subscribe(color => this.colorSwitch = color);
    this.profile = await this.keycloakService.loadUserProfile()
    console.log(this.profile);
  
    this.fullName = this.profile.firstName +' ' +this.profile.lastName
    console.log(this.fullName);
    
  }
  switch (selected:number) {
    this.color=selected
  }
  logout(){
    this.keycloakService.logout()
  }


}
