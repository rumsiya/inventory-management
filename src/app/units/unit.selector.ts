import { createFeatureSelector, createSelector } from "@ngrx/store";
import { UnitState } from "./unit.reducer";


export const selectUnitInitial = createFeatureSelector<UnitState>('units');
export const selectUnit = createSelector(
  selectUnitInitial,
  state=>state.unit
)
