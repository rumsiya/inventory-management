import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { getProduct, loadProduct } from 'src/app/products/product.action';
import { selectedProduct, selectProduct } from 'src/app/products/product.selector';
import { loadUnit } from 'src/app/units/unit.action';
import { selectUnit } from 'src/app/units/unit.selector';
import { addStock } from '../stock.action';

@Component({
  selector: 'app-add-stock',
  templateUrl: './add-stock.component.html',
  styleUrls: ['./add-stock.component.scss']
})
export class AddStockComponent implements OnInit {

  quantityLimit:number=0
  stockData:any ={
    product_id:0,
    type:0,
    quantity:0,
    unit_id:0
  }

  outOfStock:boolean=false;

  prod$:Observable<any[]>;
  unit$:Observable<any[]>;
  productGet$!:Observable<any>;
  constructor(
    private store:Store
  ) {
    this.store.dispatch(loadProduct());
    this.store.dispatch(loadUnit());


    this.prod$ = this.store.select(selectProduct)
    this.unit$ = this.store.select(selectUnit);
  }

  ngOnInit(): void {
  }

  addToStock(f:any){
    if(f.valid){
      const data = {...this.stockData};
      this.store.dispatch(addStock({stock:data}))
    }
    this.stockData ={};
    this.quantityLimit=0;
    this.outOfStock=false;
  }

  productChange(event:any){
    this.store.dispatch(getProduct({id:event.value}));
    this.productGet$ =this.store.select(selectedProduct)

  }

  typeChange(event:any){
    if(event.value=='OUT'){
      this.productGet$.subscribe((res:any)=>{
        this.quantityLimit = res.quantity;

      })
    }
  }

  changeQty(){
    if(this.stockData.quantity> this.quantityLimit){
      this.outOfStock = true;
    }else{
            this.outOfStock = false;

    }
  }

}
