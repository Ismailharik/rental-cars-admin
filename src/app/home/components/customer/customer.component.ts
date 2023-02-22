import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { Customer } from '../../models/customer.model';
import { HomeService } from '../../services/home.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
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
    private fb: FormBuilder) {

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
    console.log(this.customerForm.value);
    console.log("------------");
    
    this.homeServices.updateUser(this.customerForm.value).subscribe({
      next : resp=>{
        this.getCustomers()
      },
      error : err=>{
        console.log(err);
        
      }
    })
  }
  deleteCustomer(id:number){
    console.log(id);
    this.homeServices.deleteCustomer(id).subscribe({
      next : resp=>{
        console.log(resp);

        this.getCustomers()

      }
    })
  }
}
