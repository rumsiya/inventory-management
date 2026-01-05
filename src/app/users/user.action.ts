import { createAction, props } from "@ngrx/store";
import { User } from "./user.model";

export const addUser = createAction('[User] add to User',props<{user:User}>());
export const addUserSuccess = createAction('[User] add to User success',props<{user:User}>());

export const loadUser =  createAction('[User] load User');
export const loadUserSuccess = createAction('[User] load User success' , props<{user:User[]}>());

export const editUser =createAction('[User] edit User',props<{user:User,id:number}>());
export const editUserSuccess =createAction('[User] edit User success',props<{user:User,id:number}>());

export const deleteUser =createAction('[User] delete User',props<{user:User,id:number}>());
export const deleteUserSuccess =createAction('[User] delete User sucess',props<{user:User,id:number}>());
