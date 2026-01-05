import { createReducer, on } from "@ngrx/store";
import { Supplier } from "./supplier.model";
import { addSupplierSuccess, deleteSupplierSuccess, editSupplierSuccess, loadSupplierSuccess } from "./supplier.action";


export interface SupplerState{
  supplier:Supplier[]
}

export const initialSupplier:SupplerState={
  supplier:[]
}

export const supplierReducer = createReducer(
  initialSupplier,
  on(loadSupplierSuccess,(state,{supplier})=>({
    ...state,
    supplier:supplier
  })),
  on(addSupplierSuccess,(state,{supplier})=>({
    ...state,
    supplier:[...state.supplier,supplier]
  })),
  on(editSupplierSuccess,(state,{supplier,id})=>({
    ...state,
    supplier:[...state.supplier.map((s,i)=>s.id===id?supplier:s)]
  })),
  on(deleteSupplierSuccess,(state,{supplier,id})=>({
    ...state,
    supplier:[...state.supplier.filter((s,_)=>s.id!==id)]
  })),

)
