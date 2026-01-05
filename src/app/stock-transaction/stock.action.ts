import { createAction, props } from "@ngrx/store";
import { Stock } from "./stock.models";


export const loadStock = createAction('[stock] load stock');
export const loadStockSuccess = createAction('[stock] load stock success' , props<{stock:Stock[]}>());

export const addStock = createAction('[stock] add stock',props<{stock:Stock}>());
export const addStockSuccess = createAction('[stock] add stock success' , props<{stock:Stock}>());

