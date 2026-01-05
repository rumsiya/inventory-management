import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddSupplierComponent } from './add-supplier/add-supplier.component';
import { SupplierListComponent } from './supplier-list/supplier-list.component';
import { FormsModule } from '@angular/forms';
import { MainModule } from '../main/main.module';
import { MatTableModule } from '@angular/material/table';



@NgModule({
  declarations: [
    AddSupplierComponent,
    SupplierListComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MainModule,
    MatTableModule
  ]
})
export class SuppliersModule { }
