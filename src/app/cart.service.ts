import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  items = [];
  count = new BehaviorSubject(this.items.length);

  constructor(
    private http: HttpClient
  ) { }

  addToCart(product) {
    this.items.push(product);
    this.count.next(this.items.length);
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }

  removeItem(index) {
    
  }

  getShippingPrices() {
    return this.http.get('/assets/shipping.json');
  }

  getCount() {
    return this.count;
  }
}