import { createFeatureSelector, createSelector } from "@ngrx/store";
import { initialProduct, ProductState } from "./product.reducer";


export const selectInitialProduct = createFeatureSelector<ProductState>('products');
export const selectProduct = createSelector(
  selectInitialProduct,
  state => state.product
)

export const selectedProduct = createSelector(
  selectInitialProduct,
  state =>state.selectedProduct
)
