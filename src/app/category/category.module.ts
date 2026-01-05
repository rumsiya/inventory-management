import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddCategoryComponent } from './add-category/add-category.component';
import { CategoryListComponent } from './category-list/category-list.component';
import { MainModule } from '../main/main.module';
import { FormsModule } from '@angular/forms';
import { MatTableModule } from "@angular/material/table";
import { MatSnackBarModule } from '@angular/material/snack-bar';



@NgModule({
  declarations: [
    AddCategoryComponent,
    CategoryListComponent,
  ],
  imports: [
    CommonModule,
    MainModule,
    FormsModule,
    MatTableModule,
    MatSnackBarModule
]
})
export class CategoryModule { }
