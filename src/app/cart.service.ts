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
    console.log(`distinct items: ${this.items.size}`);
    let count = 0;

    this.items.forEach((value: object, key: string) => {
      count += value[1];
    });

    console.log(`Updated cart count: ${count}`)
    return count;
  }

  addToCart(product, quantity) {
    console.log(`Adding ${quantity} ${product.name}`)

    if (this.items.has(product.name)) {
      this.items.get(product.name)[1] += quantity;
    } else {
      let pair: [object, number];
      pair = [product, quantity];
      this.items.set(product.name, pair);
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