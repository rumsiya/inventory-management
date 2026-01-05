import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { editUser } from '../user.action';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {
  users:any;
  editFormData:any ={
    name:'',
    email:'',
    role:0,
    phone:''
  }

  constructor(
    @Inject(MAT_DIALOG_DATA) public data:any,
    private dialogRef :MatDialog,
    private store:Store
  ) {
    this.users = data
    this.editFormData = {...data};
    console.log(this.editFormData)
   }

  ngOnInit(): void {
  }

  update(f:any){
    if(f.valid){
      const data = this.editFormData
      this.store.dispatch(editUser({user:data,id:data.id}))
      this.dialogRef.closeAll()
    }
  }

}
