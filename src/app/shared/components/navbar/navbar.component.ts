import { Component, OnInit, Output } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {


  constructor(private s:SharedService) { }

  ngOnInit(): void {
  }
  
}
