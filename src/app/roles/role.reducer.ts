import { createReducer, on } from "@ngrx/store";
import { Role } from "./role.model";
import { addRoleSuccess, deleteRoleSuccess, editRoleSuccess, loadRoleSuccess } from "./role.action";


export interface RoleState{
  role:Role[]
}

export const initialRole:RoleState={
  role:[]
}

export const roleReducer = createReducer(
  initialRole,
  on(loadRoleSuccess,(state,{role})=>({
    ...state,
    role:role
  })),
  on(addRoleSuccess,(state,{role})=>({
    ...state,
    role:[...state.role,role]
  })),
  on(editRoleSuccess,(state,{role,id})=>({
    ...state,
    role:[...state.role.map((u,i)=> u.id===id ? role:u)]
  })),
  on(deleteRoleSuccess,(state,{role,id})=>({
    ...state,
    role:[...state.role.filter((u,_)=> u.id!==id )]
  })),
)
