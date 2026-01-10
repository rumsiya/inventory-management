import { createFeatureSelector, createSelector } from "@ngrx/store";
import { RoleState } from "./role.reducer";


export const selectRoleInitial = createFeatureSelector<RoleState>('roles');
export const selectRole = createSelector(
  selectRoleInitial,
  state=>state.role
)
