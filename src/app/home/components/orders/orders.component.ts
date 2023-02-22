import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { Order } from '../../models/order.model';
import { OrdersService } from '../../services/orders.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  orders!:Order[]
  orderForm!: FormGroup;

  // pagination variables
  page=1
  pageSize=10
  constructor(
    private ordersService: OrdersService, 
    config: NgbModalConfig, 
    private modalService: NgbModal,
    private fb: FormBuilder) {

    // customize default values of modals used by this component tree
    config.backdrop = 'static';
    config.keyboard = false;
  }

  ngOnInit(): void {
    this.getAllOrders()
  }
  addOrder(){

  }

  initializeForm(order:Order){
    this.orderForm = this.fb.group({
      id:[order.id], 
      pickUpDate: [order.pickUpDate],
      duration: [order.duration],
      officeId: [order.officeId],
      vehicleId: [order.vehicleId],
      totalPrice: [order.totalPrice],
      confirmed: [order.confirmed],
      customerId: [order.customerId],
      paid:[order.paid]
    })
  }
  open(content: any,order:Order) { 
   this.initializeForm(order);
    this.modalService.open(content);
  }
  getAllOrders(){
    this.ordersService.getAllOrders().subscribe({
      next : resp =>{
        this.orders = resp
        console.log(resp);
      },
      error : err=>{
        console.log(err);
        
      }
    })
  }
  deleteOrder(id:number){
    this.ordersService.deleteOrder(id).subscribe({
      next : resp =>{
        console.log("success");
        this.getAllOrders()
      },
      error : err =>{
        console.log(err);
        
      }
    })
  }
  updateOrder(){
    console.log(this.orderForm.value);
    
    this.ordersService.updateOrder(this.orderForm.value).subscribe({
        next : resp =>{
          console.log(resp);
          this.getAllOrders()
        },
        error : err=>{
          console.log(err);
        }
    })
  }
}
