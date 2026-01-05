import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { UserService } from 'src/app/services/user.service';
import { addUser } from '../user.action';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {

  constructor(
    private userService:UserService,
    private store:Store
  ) { }

  registerData:any={
    name:'',
    email:'',
    role:0,
    phone:'',
    password:'',
    cpass:''
  }

  ngOnInit(): void {
  }

  register(f:any){
    if(f.valid){
      const data = f.value;
      this.store.dispatch(addUser({user:this.registerData}))
      this.registerData ={}
    }
  }

}
