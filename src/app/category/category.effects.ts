import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { addCategory, addCategorySuccess, deleteCategory, deleteCategorySuccess, editCategory, editCategorySuccess, loadCategory, loadCategorySuccess } from "./category.action";
import { mergeMap ,map ,tap} from "rxjs/operators";
import { environment } from "src/environments/environment";
import { HttpClient } from "@angular/common/http";
import { MatSnackBar } from "@angular/material/snack-bar";

@Injectable()
export class CategoryEffects{

  private url = environment.apiUrl;
  constructor(
    private actions:Actions,
    private http: HttpClient,
    private _snackBar:MatSnackBar
  ){

  }

  loadCategory$ = createEffect(()=>
    this.actions.pipe(
      ofType(loadCategory),
      mergeMap((action:any)=> this.http.get(this.url + 'categories')
      .pipe(
        tap((res:any)=>console.log(res)),
        map((res:any) => loadCategorySuccess({category:res.categories}))
      )
      )
    )
  )

  addCtegory$ = createEffect(()=>
    this.actions.pipe(
      ofType(addCategory),
      mergeMap((action:any)=> this.http.post(this.url + 'categories',action.category)
      .pipe(
        map((res:any) => addCategorySuccess({category:res.categories}))
      )
      )
    )
  )

  editCategory$ = createEffect(()=>
    this.actions.pipe(
      ofType(editCategory),
      mergeMap((action:any)=> this.http.put(this.url + `categories/${action.id}`,action.category)
      .pipe(
        map((res:any) => editCategorySuccess({category:res.categories,id:res.categories.id}))
      )
      )
    )
  )

  deleteCategory$ = createEffect(()=>
    this.actions.pipe(
      ofType(deleteCategory),
      mergeMap((action:any)=> this.http.delete(this.url + `categories/${action.id}`)
      .pipe(
        map((res:any) => deleteCategorySuccess({category:res.categories,id:action.id}))
      )
      )
    )
  )

  deleteCategorySuccess$ = createEffect(()=>
    this.actions.pipe(
      ofType(deleteCategorySuccess),
      tap(()=>
        this._snackBar.open('Successfully deleted', 'close',
          {
            verticalPosition:'top',
            horizontalPosition:'center'
          }
        )
      )
    ),
    {dispatch:false}
  )

}
