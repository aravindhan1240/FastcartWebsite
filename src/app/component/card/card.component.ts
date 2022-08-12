import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/servie/cart.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  public product :any =[];
  public grandtotal !:number;
  constructor(private cartScervice :CartService) { }

  ngOnInit(): void {
    this.cartScervice.getProduct()
    .subscribe(res=>{
      this.product =res;
      this.grandtotal = this.cartScervice.getTotalPrice();
    })

    
  }
  removeItem(item: any){
    this.cartScervice.removeCartItem(item);
  }
  emptycart(){
    this.cartScervice.removeAllCart();
  }

}
