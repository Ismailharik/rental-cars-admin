import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { ToastService } from 'src/app/shared/components/toasts/toast-service';
import { Customer } from '../../models/customer.model';
import { HomeService } from '../../services/home.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {

  customers!: Customer[]
  customerForm!: FormGroup;
  page:number=1
  pageSize:number=5

  constructor(
    private homeServices: HomeService, 
    config: NgbModalConfig, 
    private modalService: NgbModal,
    private fb: FormBuilder,
    public toastService:ToastService
    ) {

    // customize default values of modals used by this component tree
    config.backdrop = 'static';
    config.keyboard = false;
  }

  ngOnInit(): void {
    this.getCustomers()
  }
  getCustomers(){
    this.homeServices.getCustomers().subscribe({
      next: resp => {
        
        this.customers = resp
      },
      error: err => {
        console.log(err);

      }
    })
  }

  initializeForm(customer?:Customer){
      this.customerForm = this.fb.group({
        id  :[customer?.id],
        fullName:[customer?.fullName],
        email:[customer?.email],
        phone:[customer?.phone],
        birthdate:[customer?.birthdate],
        password:[customer?.passowrd],
        status:[customer?.status],
      })
  }

  open(content: any,customer?:Customer) {
    this.initializeForm(customer)    
  //  this.initializeForm(customer);
    this.modalService.open(content);
  }
  saveUpdate(){ 

    this.homeServices.updateUser(this.customerForm.value).subscribe({
      next : resp=>{
        this.showSuccess("customer updated successfully")
        this.getCustomers()
      },
      error : err=>{
        console.log(err);
        
      }
    })
  }
  deleteCustomer(id:number){
    
    this.homeServices.deleteCustomer(id).subscribe({
      next : resp=>{
        this.showDanger("customer deleted successfully")
        console.log(resp);
        this.getCustomers()
      }
    })
  }









  // Start toasts methods
  showStandard(message:string) {
		this.toastService.show(message);
	}

	showSuccess(message:string) {
		this.toastService.show(message, { classname: 'bg-success text-light', delay: 10000 });
	}

	showDanger(message: string) {
		this.toastService.show(message, { classname: 'bg-gradient-primary text-light', delay: 15000 });
	}

	ngOnDestroy(): void {
		this.toastService.clear();
	}
  //End toasts methods
}
