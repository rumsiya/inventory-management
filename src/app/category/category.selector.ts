import { createFeatureSelector, createSelector } from "@ngrx/store";
import { Category } from "./category.model";
import { CategoryState } from "./category.reducer";


export const selectInitialCat = createFeatureSelector<CategoryState>('categories');
export const selectCat = createSelector(
  selectInitialCat,
  state => state.category
)
