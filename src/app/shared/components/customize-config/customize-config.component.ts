import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-customize-config',
  templateUrl: './customize-config.component.html',
  styleUrls: ['./customize-config.component.css']
})
export class CustomizeConfigComponent implements OnInit {

  show:boolean=false;

  constructor(public sharedService:SharedService) { }

  ngOnInit(): void {
  
  }
  toggleSideBare(){
    this.show = !this.show
  }
}
