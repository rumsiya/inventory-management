import { createAction, props } from "@ngrx/store";
import { Role } from "./role.model";


export const loadRole = createAction('[Role] load role');
export const loadRoleSuccess = createAction('[Role] load role success', props<{role:Role[]}>());

export const addRole = createAction('[Role] add role',props<{role:Role}>());
export const addRoleSuccess = createAction('[Role] add role success', props<{role:Role}>());

export const editRole = createAction('[Role] edit role',props<{role:Role,id:number}>());
export const editRoleSuccess = createAction('[Role] edit role success', props<{role:Role,id:number}>());

export const deleteRole = createAction('[Role] delete role',props<{role:Role,id:number}>());
export const deleteRoleSuccess = createAction('[Role] delete role success', props<{role:Role,id:number}>());
