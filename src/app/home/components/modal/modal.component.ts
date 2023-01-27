import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
  providers: [NgbModalConfig, NgbModal],
})
export class ModalComponent implements OnInit {

  constructor(config: NgbModalConfig, private modalService: NgbModal) { 
    		// customize default values of modals used by this component tree
		config.backdrop = 'static';
		config.keyboard = false;
  }

  ngOnInit(): void {
  }


	open(content: any) {
		this.modalService.open(content);
	}
}
