import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { deleteProduct, loadProduct } from '../product.action';
import { selectProduct } from '../product.selector';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  public imgUrl = 'https://inventory-management-api-production-edc5.up.railway.app/storage/';

  editProductFlag:boolean=false;
  editProductInput:any

  displayedColumns:string[]=[ 'no','product_name','quantity','unit','price','category','supplier','image','action']
  dataSource= new MatTableDataSource<any>();
  pro$:Observable<any>;
  constructor(
    private store:Store
  ) {
    this.store.dispatch(loadProduct());
    this.pro$ = this.store.select(selectProduct)
  }

  ngOnInit(): void {

    this.pro$.subscribe((res:any)=>
    {
      this.dataSource.data = res;
    })
  }

  editProduct(pro:any){
    this.editProductFlag = true;
    this.editProductInput = {...pro}
  }

  deleteProduct(pro:any){
    this.store.dispatch(deleteProduct({product:pro,id:pro.id}))
  }

}
