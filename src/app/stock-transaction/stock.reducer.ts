import { createReducer, on } from "@ngrx/store";
import { Stock } from "./stock.models";
import { addStockSuccess, loadStock, loadStockSuccess } from "./stock.action";


export interface StockState{
  stock:Stock[]
}

export const initialStock:StockState = {
  stock:[]
}

export const stockReducer = createReducer(
  initialStock,
  on(loadStockSuccess,(state,{stock})=>({
    ...state,
    stock:stock
  })),
  on(addStockSuccess,(state,{stock})=>(
    {
      ...state,
      stock:[...state.stock,stock]
    }
  ))
)
