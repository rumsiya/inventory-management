import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { addProduct, addProductSuccess, deleteProduct, deleteProductSuccess, editProduct, editProductSuccess, getProduct, getProductSuccess, loadProduct, loadProductSuccess } from "./product.action";
import { mergeMap, map } from "rxjs/operators";
import { environment } from "src/environments/environment";

@Injectable()
export class ProductEffects{

  private url= environment.apiUrl
  constructor(
    private actions:Actions,
    private http:HttpClient
  ){

  }

  loadProduct$ = createEffect(()=>
    this.actions.pipe(
      ofType(loadProduct),
      mergeMap((action:any)=> this.http.get(this.url + 'products')
        .pipe(
          map((res:any)=> loadProductSuccess({product:res.products}))
        )
      )
    )
  )

  addProduct$ = createEffect(()=>
    this.actions.pipe(
      ofType(addProduct),
      mergeMap((action:any)=> this.http.post(this.url + 'products',action.product)
        .pipe(
          map((res:any)=> addProductSuccess({product:res.product}))
        )
      )
    )
  )

  editProduct$ = createEffect(()=>
    this.actions.pipe(
      ofType(editProduct),
      mergeMap((action:any)=> this.http.post(this.url + `products/${action.id}`,action.product)
        .pipe(
          map((res:any)=> editProductSuccess({product:res.product,id:res.product.id}))
        )
      )
    )
  )

   deleteProduct$ = createEffect(()=>
    this.actions.pipe(
      ofType(deleteProduct),
      mergeMap((action:any)=> this.http.delete(this.url + `products/${action.id}`)
        .pipe(
          map((res:any)=> deleteProductSuccess({product:res.products,id:action.id}))
        )
      )
    )
  )

  getProduct$ = createEffect(()=>
    this.actions.pipe(
      ofType(getProduct),
      mergeMap((action:any)=> this.http.get(this.url + `products/${action.id}`)
        .pipe(
          map((res:any)=> getProductSuccess({product:res.product}))
        )
      )
    )
  )
}
