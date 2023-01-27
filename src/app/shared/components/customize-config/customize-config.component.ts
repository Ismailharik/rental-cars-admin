import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customize-config',
  templateUrl: './customize-config.component.html',
  styleUrls: ['./customize-config.component.css']
})
export class CustomizeConfigComponent implements OnInit {

  show:boolean=false;
  constructor() { }

  ngOnInit(): void {
  
  }
  toggleSideBare(){
    this.show = !this.show
  }
}
