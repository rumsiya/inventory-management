import { createFeatureSelector, createSelector } from "@ngrx/store";
import { StockState } from "./stock.reducer";


export const selectInitialStock = createFeatureSelector<StockState>('stocks');
export const selectStock = createSelector(
  selectInitialStock,
  state => state.stock
)
