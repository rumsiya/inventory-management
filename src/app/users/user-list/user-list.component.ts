import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { UserService } from 'src/app/services/user.service';
import { selectData } from '../user.selector';
import { deleteUser, loadUser } from '../user.action';
import { MatDialog } from '@angular/material/dialog';
import { ShowUserComponent } from '../show-user/show-user.component';
import { EditUserComponent } from '../edit-user/edit-user.component';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  displayedColumns:string[] = ['no','name', 'email' , 'role', 'phone','action'];

  dataSource = new MatTableDataSource<any>();
  // user$ :Observable<any>;

  registerData:any={
    name:'',
    email:'',
    role:0,
    phone:''
  }

  user$:Observable<any>;
  constructor(
    private userService:UserService,
    private store:Store,
    private dialog:MatDialog
  ) {
    this.store.dispatch(loadUser())
    this.user$ = this.store.select(selectData)
   }



  ngOnInit(): void {
    this.store.dispatch(loadUser())
    this.user$ = this.store.select(selectData)
    console.log(this.user$)
    this.getUser();
  }

  getUser(){
    this.user$.subscribe((res:any)=>{
      this.dataSource.data = res;

    })

  }

  showUser(user:any){
    const dial = this.dialog.open(ShowUserComponent,{
      data:user,
      width:'500px'
    })
  }

  editUser(user:any){
    const dial = this.dialog.open(EditUserComponent,{
      data:user,
      width:'500px'
    })
  }

  deleteUser(user:any){
    const id = user.id;
    this.store.dispatch(deleteUser({user:user,id:id}));
  }
}
