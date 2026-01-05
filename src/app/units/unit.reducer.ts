import { createReducer, on } from "@ngrx/store";
import { Unit } from "./unit.model";
import { addUnitSuccess, deleteUnitSuccess, editUnitSuccess, loadUnitSuccess } from "./unit.action";


export interface UnitState{
  unit:Unit[]
}

export const initialUnit:UnitState={
  unit:[]
}

export const unitReducer = createReducer(
  initialUnit,
  on(loadUnitSuccess,(state,{unit})=>({
    ...state,
    unit:unit
  })),
  on(addUnitSuccess,(state,{unit})=>({
    ...state,
    unit:[...state.unit,unit]
  })),
  on(editUnitSuccess,(state,{unit,id})=>({
    ...state,
    unit:[...state.unit.map((u,i)=> u.id===id ? unit:u)]
  })),
  on(deleteUnitSuccess,(state,{unit,id})=>({
    ...state,
    unit:[...state.unit.filter((u,_)=> u.id!==id )]
  })),
)
