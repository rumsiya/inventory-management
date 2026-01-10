import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";` `
import { environment } from "src/environments/environment";
import { mergeMap,tap, map } from 'rxjs/operators'
import { addRole, addRoleSuccess, deleteRole, deleteRoleSuccess, editRole, editRoleSuccess, loadRole, loadRoleSuccess } from "./role.action";

@Injectable()
export class RoleEffects{

  private url = environment.apiUrl
  constructor(
    private actions:Actions,
    private http:HttpClient
  ){}

  loadRole$ = createEffect(()=>
    this.actions.pipe(
      ofType(loadRole),
      mergeMap((action:any)=> this.http.get(this.url + 'roles')
        .pipe(
          map((res:any) => loadRoleSuccess({role:res.roles}))
        )
      )
    )
  )

  addRole$ = createEffect(()=>
    this.actions.pipe(
      ofType(addRole),
      mergeMap((action:any)=> this.http.post(this.url + 'roles',action.role)
        .pipe(
          tap((res:any)=>console.log(res.roles)),
          map((res:any) => addRoleSuccess({role:res.role}))
        )
      )
    )
  )

  editRole$ = createEffect(()=>
    this.actions.pipe(
      ofType(editRole),
      mergeMap((action:any)=> this.http.put(this.url + `roles/${action.id}`,action.role)
        .pipe(
          tap((res:any)=> console.log(res)),
          map((res:any) => editRoleSuccess({role:res.role,id:res.role.id}))
        )
      )
    )
  )

  deleteRole$ = createEffect(()=>
    this.actions.pipe(
      ofType(deleteRole),
      mergeMap((action:any)=> this.http.delete(this.url + `roles/${action.id}`,action.role)
        .pipe(
          map((res:any) => deleteRoleSuccess({role:res.role,id:action.id}))
        )
      )
    )
  )
}
