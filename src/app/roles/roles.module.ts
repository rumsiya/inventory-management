import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoleListComponent } from './role-list/role-list.component';
import { AddRoleComponent } from './add-role/add-role.component';
import { MainModule } from '../main/main.module';
import { FormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';



@NgModule({
  declarations: [
    RoleListComponent,
    AddRoleComponent
  ],
  imports: [
    CommonModule,
    MainModule,
    FormsModule,
    MatTableModule
  ]
})
export class RolesModule { }
