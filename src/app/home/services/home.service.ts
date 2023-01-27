import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Customer } from '../models/customer.model';
import { StockInfo } from '../models/stockInfo.model';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  deleteCustomer(id: number) {
    return this.httpClient.delete(environment.host+"/customers/"+id)
  }


  constructor(private httpClient:HttpClient) { }
  updateUser(value: Customer):Observable<Customer> {
    return this.httpClient.put<Customer>(environment.host+"/customers",value)
  }

  getStockInfo():Observable<StockInfo>{
    return this.httpClient.get<StockInfo>(environment.host+"/stockFeedBack")
  }
  getCustomers():Observable<Customer[]>{
    return this.httpClient.get<Customer[]>(environment.host+"/customers")
  }
}
