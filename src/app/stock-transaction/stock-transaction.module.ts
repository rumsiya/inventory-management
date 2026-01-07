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
import { ReportsComponent } from './reports/reports.component';
import { NgChartsModule } from 'ng2-charts';



@NgModule({
  declarations: [
    AddStockComponent,
    StockListComponent,
    FilterStockComponent,
    ReportsComponent
  ],
  imports: [
    CommonModule,
    MainModule,
    MatTableModule,
    FormsModule,
    MatSelectModule,
    MatPaginatorModule,
    NgChartsModule
  ]
})
export class StockTransactionModule { }
