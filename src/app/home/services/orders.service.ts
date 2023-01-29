import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Order } from '../models/order.model';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  deleteOrder(id: number) {
    return this.HttpClient.delete(environment.host+"/reservations/"+id)
  }
  updateOrder(order: Order):Observable<Order> {
    return this.HttpClient.put<Order>(environment.host+"/reservations",order)
  }


  constructor(private HttpClient:HttpClient) { }  
  
  
  getAllOrders() :Observable<Order[]>{
    return this.HttpClient.get<Order[]>(environment.host+"/reservations");
  }
}
