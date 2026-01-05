import { createAction, props } from "@ngrx/store";
import { Supplier } from "./supplier.model";


export const loadSupplier = createAction('[supplier] load supplier')
export const loadSupplierSuccess = createAction('[supplier] load supplier success', props<{supplier:Supplier[]}>())

export const addSupplier = createAction('[supplier] add supplier',props<{supplier:Supplier}>())
export const addSupplierSuccess = createAction('[supplier] add supplier success', props<{supplier:Supplier}>())

export const editSupplier = createAction('[supplier] edit supplier',props<{supplier:Supplier,id:number}>())
export const editSupplierSuccess = createAction('[supplier] edit supplier success', props<{supplier:Supplier,id:number}>())


export const deleteSupplier = createAction('[supplier] delete supplier',props<{supplier:Supplier,id:number}>())
export const deleteSupplierSuccess = createAction('[supplier] delete supplier success', props<{supplier:Supplier,id:number}>())


