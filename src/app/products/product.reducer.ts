import { createReducer, on } from "@ngrx/store";
import { Product } from "./product.model";
import { addProductSuccess, deleteProductSuccess, editProductSuccess, getProductSuccess, loadProduct, loadProductSuccess } from "./product.action";


export interface ProductState{
  product:Product[],
  selectedProduct:Product|null
}

export const initialProduct:ProductState ={
  product:[],
  selectedProduct:null
}

export const productReducer = createReducer(
  initialProduct,
  on(loadProductSuccess,(state,{product})=>({
    ...state,
    product:product
  })),
   on(addProductSuccess,(state,{product})=>({
    ...state,
    product:[...state.product,product]
  })),
   on(editProductSuccess,(state,{product,id})=>({
    ...state,
    product:[...state.product.map((p,i)=>p.id===id?product:p)]
  })),
  on(deleteProductSuccess,(state,{product,id})=>({
    ...state,
    product:[...state.product.filter((p,_)=>p.id!==id)]
  })),
  on(getProductSuccess,(state,{product})=>({
    ...state,
    selectedProduct:product
  })),

)
