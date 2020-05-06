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

  countTotalItems() {
    let count = 0;
    for (let item of this.items) {
      count += item[1]
    }
    console.log(`Updated cart count: ${count}`)
    return count;
  }

  addToCart(productName, quantity) {
    console.log(`Adding ${quantity} ${productName.toString()}`)
    if (this.items.has(productName)) {
      this.items.get[productName] += quantity;
    } else {
      this.items.set(productName, quantity);
    }
    this.count.next(this.countTotalItems());
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