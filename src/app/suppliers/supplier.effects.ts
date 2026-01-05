import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { addSupplier, addSupplierSuccess, deleteSupplier, deleteSupplierSuccess, editSupplier, editSupplierSuccess, loadSupplier, loadSupplierSuccess } from "./supplier.action";
import { mergeMap,map } from "rxjs/operators";
import { environment } from "src/environments/environment";

@Injectable()
export class SupplierEffects{

  private url= environment.apiUrl
  constructor(
    private actions:Actions,
    private http:HttpClient
  ){}

  loadSupplier$ = createEffect(()=>
    this.actions.pipe(
      ofType(loadSupplier),
      mergeMap((action:any)=> this.http.get(this.url + 'suppliers')
      .pipe(
        map((res:any)=> loadSupplierSuccess({supplier:res.supplier}))
      )
    )
    )
  )

  addSupplier$ = createEffect(()=>
    this.actions.pipe(
      ofType(addSupplier),
      mergeMap((action:any)=> this.http.post(this.url + 'suppliers',action.supplier)
      .pipe(
        map((res:any)=> addSupplierSuccess({supplier:res.supplier}))
      )
      )
    )
  )

  editSupplier$ = createEffect(()=>
    this.actions.pipe(
      ofType(editSupplier),
      mergeMap((action:any)=> this.http.put(this.url + `suppliers/${action.id}`,action.supplier)
      .pipe(
        map((res:any)=> editSupplierSuccess({supplier:res.supplier,id:res.supplier.id}))
      )
      )
    )
  )

  deleteSupplier$ = createEffect(()=>
    this.actions.pipe(
      ofType(deleteSupplier),
      mergeMap((action:any)=> this.http.delete(this.url + `suppliers/${action.id}`)
      .pipe(
        map((res:any)=> deleteSupplierSuccess({supplier:res.supplier,id:action.id}))
      )
      )
    )
  )
}
