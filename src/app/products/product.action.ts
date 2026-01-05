import { createAction, props } from "@ngrx/store";
import { Product } from "./product.model";


export const addProduct = createAction('[product] add product',props<{product:FormData}>());
export const addProductSuccess = createAction('[product] add product success',props<{product:Product}>());

export const loadProduct = createAction('[product] load product');
export const loadProductSuccess = createAction('[product] load product success',props<{product:Product[]}>());

export const editProduct = createAction('[product] edit product',props<{product:FormData,id:number}>());
export const editProductSuccess = createAction('[product] edit product success',props<{product:Product,id:number}>());

export const deleteProduct = createAction('[product] delete product',props<{product:Product,id:number}>());
export const deleteProductSuccess = createAction('[product] delete product success',props<{product:Product,id:number}>());


export const getProduct = createAction('[product] get product',props<{id:number}>());
export const getProductSuccess = createAction('[product] get product success',props<{product:Product}>());
