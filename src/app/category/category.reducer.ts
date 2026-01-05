import { createReducer, on } from "@ngrx/store";
import { Category } from "./category.model";
import {  addCategorySuccess, deleteCategorySuccess, editCategorySuccess, loadCategorySuccess } from "./category.action";



export interface CategoryState{
  category:Category[];
}
export const initialCat:CategoryState = {
  category:[]
}

export const categoryReducer = createReducer(
  initialCat,
  on(loadCategorySuccess,(state,{category})=>({
    ...state,
    category:category
  })),
  on(addCategorySuccess,(state,{category})=>({
    ...state,
    category:[...state.category,category]
  })),
   on(editCategorySuccess,(state,{category,id})=>({
    ...state,
    category:[...state.category.map((c,i)=> c.id === id? category:c)]
  })),
  on(deleteCategorySuccess,(state,{category,id})=>({
    ...state,
    category:[...state.category.filter((c,_)=> c.id !== id)]
  }))
)
