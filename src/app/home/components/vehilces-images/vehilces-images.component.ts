import { Component, OnInit } from '@angular/core';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-vehilces-images',
  templateUrl: './vehilces-images.component.html',
  styleUrls: ['./vehilces-images.component.css']
})
export class VehilcesImagesComponent implements OnInit {



  ngOnInit(): void {
  }
  constructor(config: NgbModalConfig, private modalService: NgbModal) {
		// customize default values of modals used by this component tree
		config.backdrop = 'static';
		config.keyboard = false;
	}

	open(content: any) {
		this.modalService.open(content);
	}
}
