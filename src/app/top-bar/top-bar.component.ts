import { Component, OnInit, SimpleChanges } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {
  count;

  constructor(
    private cartService: CartService
  ) { }

  ngOnInit() {
    this.count = this.cartService.getItems.length;
  }

  ngOnChanges(changes: SimpleChanges) {
    window.alert(changes);
    this.count = this.cartService.getItems.length;
  }

}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/