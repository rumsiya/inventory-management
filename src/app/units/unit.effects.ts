import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { addUnit, addUnitSuccess, deleteUnit, deleteUnitSuccess, editUnit, editUnitSuccess, loadUnit, loadUnitSuccess } from "./unit.action";
import { environment } from "src/environments/environment";
import { mergeMap,tap, map } from 'rxjs/operators'

@Injectable()
export class UnitEffects{

  private url = environment.apiUrl
  constructor(
    private actions:Actions,
    private http:HttpClient
  ){}

  loadUnit$ = createEffect(()=>
    this.actions.pipe(
      ofType(loadUnit),
      mergeMap((action:any)=> this.http.get(this.url + 'units')
        .pipe(
          map((res:any) => loadUnitSuccess({unit:res.units}))
        )
      )
    )
  )

  addUnit$ = createEffect(()=>
    this.actions.pipe(
      ofType(addUnit),
      mergeMap((action:any)=> this.http.post(this.url + 'units',action.unit)
        .pipe(
          tap((res:any)=>console.log(res.units)),
          map((res:any) => addUnitSuccess({unit:res.units}))
        )
      )
    )
  )

  editUnit$ = createEffect(()=>
    this.actions.pipe(
      ofType(editUnit),
      mergeMap((action:any)=> this.http.put(this.url + `units/${action.id}`,action.unit)
        .pipe(
          tap((res:any)=> console.log(res)),
          map((res:any) => editUnitSuccess({unit:res.units,id:res.units.id}))
        )
      )
    )
  )

  deleteUnit$ = createEffect(()=>
    this.actions.pipe(
      ofType(deleteUnit),
      mergeMap((action:any)=> this.http.delete(this.url + `units/${action.id}`,action.unit)
        .pipe(
          map((res:any) => deleteUnitSuccess({unit:res.unit,id:action.id}))
        )
      )
    )
  )
}
