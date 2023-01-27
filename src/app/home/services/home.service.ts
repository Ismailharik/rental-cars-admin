import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { StockInfo } from '../models/stockInfo.model';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private httpClient:HttpClient) { }

  getStockInfo():Observable<StockInfo>{
    return this.httpClient.get<StockInfo>(environment.host+"/stockFeedBack")
  }
}
