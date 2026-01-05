import { createAction, props } from "@ngrx/store";
import { Unit } from "./unit.model";


export const loadUnit = createAction('[Unit] load unit');
export const loadUnitSuccess = createAction('[Unit] load unit success', props<{unit:Unit[]}>());

export const addUnit = createAction('[Unit] add unit',props<{unit:Unit}>());
export const addUnitSuccess = createAction('[Unit] add unit success', props<{unit:Unit}>());

export const editUnit = createAction('[Unit] edit unit',props<{unit:Unit,id:number}>());
export const editUnitSuccess = createAction('[Unit] edit unit success', props<{unit:Unit,id:number}>());

export const deleteUnit = createAction('[Unit] delete unit',props<{unit:Unit,id:number}>());
export const deleteUnitSuccess = createAction('[Unit] delete unit success', props<{unit:Unit,id:number}>());
