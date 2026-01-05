import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddStockComponent } from './add-stock/add-stock.component';
import { StockListComponent } from './stock-list/stock-list.component';
import { MainModule } from '../main/main.module';
import { MatTableModule } from '@angular/material/table';
import { FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { FilterStockComponent } from './filter-stock/filter-stock.component';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';



@NgModule({
  declarations: [
    AddStockComponent,
    StockListComponent,
    FilterStockComponent
  ],
  imports: [
    CommonModule,
    MainModule,
    MatTableModule,
    FormsModule,
    MatSelectModule,
    MatPaginatorModule
  ]
})
export class StockTransactionModule { }
