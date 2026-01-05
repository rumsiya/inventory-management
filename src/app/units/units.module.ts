import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UnitListComponent } from './unit-list/unit-list.component';
import { AddUnitComponent } from './add-unit/add-unit.component';
import { MainModule } from '../main/main.module';
import { MatTableModule } from '@angular/material/table';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    UnitListComponent,
    AddUnitComponent
  ],
  imports: [
    CommonModule,
    MainModule,
    MatTableModule,
    FormsModule
  ]
})
export class UnitsModule { }
