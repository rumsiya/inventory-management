import { createFeatureSelector, createSelector } from "@ngrx/store";
import { SupplerState } from "./supplier.reducer";


export const selectInitialSupplier = createFeatureSelector<SupplerState>('suppliers')
export const selectSupplier = createSelector(
  selectInitialSupplier,
  state=> state.supplier
)
