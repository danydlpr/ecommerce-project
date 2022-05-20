import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { OrderHistory } from '../common/order-history';

@Injectable({
  providedIn: 'root'
})
export class OrderHistoryService {

  private orderUrl = environment.danyApiUrl + '/orders'
  constructor(private httpClient: HttpClient) { }

  getOrderHisotry(theEmail: string): Observable<ResponseOrderHistory>{

    const orderHistoryUrl = `${this.orderUrl}/search/findByCustomerEmailOrderByDateCreatedDesc?email=${theEmail}`;

    return this.httpClient.get<ResponseOrderHistory>(orderHistoryUrl);
  }
}

interface ResponseOrderHistory{
  _embedded:{
    orders: OrderHistory[];
  }
}