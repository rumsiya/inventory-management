import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { addStock, addStockSuccess, loadStock, loadStockSuccess } from "./stock.action";
import { mergeMap, map } from "rxjs/operators";
import { environment } from "src/environments/environment";


@Injectable()
export class StockEffects{

  private url = environment.apiUrl
  constructor(
    private actions:Actions,
    private http:HttpClient
  ){}

  loadStock$ = createEffect(()=>
    this.actions.pipe(
      ofType(loadStock),
      mergeMap((action:any) => this.http.get(this.url + 'stocks')
        .pipe(
          map((res:any)=> loadStockSuccess({stock:res.stocks}))
        )
      )
    )
  )

  addStock$ = createEffect(()=>
    this.actions.pipe(
      ofType(addStock),
      mergeMap((action:any) => this.http.post (this.url + 'stocks',action.stock)
        .pipe(
          map((res:any)=> addStockSuccess({stock:res.stocks}))
        )
      )
    )
  )


}
