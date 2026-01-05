import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddProductComponent } from './add-product/add-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { ProductListComponent } from './product-list/product-list.component';
import { MainModule } from '../main/main.module';
import { MatTableModule } from '@angular/material/table';
import { FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';



@NgModule({
  declarations: [
    AddProductComponent,
    EditProductComponent,
    ProductListComponent
  ],
  imports: [
    CommonModule,
    MainModule,
    MatTableModule,
    FormsModule,
    MatSelectModule
  ]
})
export class ProductsModule { }
