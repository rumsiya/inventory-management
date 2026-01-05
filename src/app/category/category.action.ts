import { createAction, props } from "@ngrx/store";
import { Category } from "./category.model";


export const loadCategory = createAction('[category] load category');
export const loadCategorySuccess = createAction('[category] load category success',props<{category:Category[]}>());

export const addCategory = createAction('[category] add category',props<{category:Category}>());
export const addCategorySuccess = createAction('[category] add category success',props<{category:Category}>());

export const editCategory = createAction('[category] edit category',props<{category:Category,id:number}>());
export const editCategorySuccess = createAction('[category] edit category success',props<{category:Category,id:number}>());

export const deleteCategory = createAction('[category] delete category',props<{category:Category,id:number}>());
export const deleteCategorySuccess = createAction('[category] delete category success',props<{category:Category,id:number}>());
