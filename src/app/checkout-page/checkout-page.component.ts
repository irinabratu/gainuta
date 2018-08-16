import { Component, OnInit, OnDestroy, ViewEncapsulation } from '@angular/core';
import { Product } from '../../model/Product';
import { MessageService } from '../services/message.service';

@Component({
  selector: 'checkout-page',
  templateUrl: './checkout-page.component.html',
  styleUrls: ['./checkout-page.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class CheckoutPageComponent implements OnInit {
  
  Products: Product[];

  constructor(private messageService: MessageService) {
    
    this.Products = new Array<Product>();
    this.calculateProductQuantities();
  }

  ngOnInit() {
  }

  ngOnDestroy() {
  }

  indexOfProduct(product: Product) {
    
    for(let i = 0; i < this.Products.length; i++){
      var item = this.Products[i];
      if(item.Id == product.Id)
        return i;
    }

    return -1;
  }

  calculateProductQuantities() : void { // todo remove
    
    let products = localStorage.getItem('checkout');
    if(!products)
      return;

    let allProducts = JSON.parse(products);
    
    for(var i = 0; i < allProducts.length; i++) {

      let index = this.indexOfProduct(allProducts[i]);
      
      if(index >= 0) {
        this.Products[index].Cantitate++;
      }
      else{
        this.Products.push(allProducts[i]);
        this.Products[this.Products.length - 1].Cantitate++;
      }
    }
  }

  clearCart(): void {
    this.messageService.clearCart();
  }
}
