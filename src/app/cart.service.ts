import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  items = new Map();
  count = new BehaviorSubject(this.items.size);

  constructor(
    private http: HttpClient
  ) { }

  addToCart(productName, quantity) {
    this.items.set(productName, quantity);
    this.count.next(this.items.size);
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items.clear;
    return this.items;
  }

  removeItem(name) {
    this.items.delete(name);
  }

  getShippingPrices() {
    return this.http.get('/assets/shipping.json');
  }

  getCount() {
    return this.count;
  }
}