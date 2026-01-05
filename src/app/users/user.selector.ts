import { createFeatureSelector, createSelector } from "@ngrx/store";
import { UserState } from "./user.reducer";


export const selectInitial = createFeatureSelector<UserState>('users');
export const selectData = createSelector(
  selectInitial,
  state => state.user
)
