import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { addUser, addUserSuccess, deleteUser, deleteUserSuccess, editUser, editUserSuccess, loadUser, loadUserSuccess } from "./user.action";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { mergeMap , map ,tap} from 'rxjs/operators'
import { MatSnackBar } from "@angular/material/snack-bar";
import { dispatch } from "rxjs/internal/observable/pairs";


@Injectable()
export class UserEffects{
  private url = environment.apiUrl;

  constructor( private actions:Actions,
    private http:HttpClient,
    private _snackBar:MatSnackBar
  ){

  }

  loadUser$ = createEffect(()=>
    this.actions.pipe(
    ofType(loadUser),
    mergeMap((action:any) => this.http.get(this.url + 'users').
      pipe(
        tap((res:any)=>console.log(res)),
        map((res:any) => loadUserSuccess({user:res.user}))
      )
    )
  )
  )

  addUser$ = createEffect(()=>
    this.actions.pipe(
    ofType(addUser),
    mergeMap((action:any) => this.http.post(this.url + 'users',action.user).
      pipe(
        tap((res:any)=>console.log(res)),
        map((res:any) => addUserSuccess({user:res.user}))
      )
    )
  )
  )

  editUser$ = createEffect(()=>
    this.actions.pipe(
    ofType(editUser),
    mergeMap((action:any) => this.http.patch(this.url + `users/${action.id}`,action.user).
      pipe(
        tap((res:any)=>console.log(res)),
        map((res:any) => editUserSuccess({user:res.user,id:res.user.id}))
      )
    )
  )
  )

  deleteUser$ = createEffect(()=>
    this.actions.pipe(
    ofType(deleteUser),
    mergeMap((action:any) => this.http.delete(this.url + `users/${action.id}`).
      pipe(
        tap((res:any)=>console.log(res)),
        map((res:any) => deleteUserSuccess({user:res.user,id:action.id}))
      )
    )
  )
  )

  showSnackbar$ = createEffect(
  () =>
    this.actions.pipe(
      ofType(deleteUserSuccess),
      tap(() => {
        this._snackBar.open('successfully deleted', 'Close', { duration: 3000 });
      })
    ),
  { dispatch: false }
);



}
