import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './user-list/user-list.component';
import { AddUserComponent } from './add-user/add-user.component';
import { MainModule } from '../main/main.module';
import { FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select'
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableModule } from '@angular/material/table'
import {  MatDialogModule } from '@angular/material/dialog';
import { ShowUserComponent } from './show-user/show-user.component';
import { EditUserComponent } from './edit-user/edit-user.component'
import { MatSnackBarModule } from '@angular/material/snack-bar'


@NgModule({
  declarations: [
    UserListComponent,
    AddUserComponent,
    ShowUserComponent,
    EditUserComponent
  ],
  imports: [
    CommonModule,
    MainModule,
    FormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatTableModule,
    MatDialogModule,
    MatSnackBarModule
  ]
})
export class UsersModule { }
