import { Component, OnInit } from '@angular/core';
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
  constructor(public sharedService:SharedService) { }

  ngOnInit(): void {
    this.sharedService.colorSwitch.subscribe(color => this.colorSwitch = color);
  }
  switch (selected:number) {
    this.color=selected
  }
  


}
