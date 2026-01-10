import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { Store } from '@ngrx/store';
import { addRole, editRole } from '../role.action';

@Component({
  selector: 'app-add-role',
  templateUrl: './add-role.component.html',
  styleUrls: ['./add-role.component.scss']
})
export class AddRoleComponent implements OnInit {

    @Input() editRoleFlag:any;
    @Input() roleInput:any;

    roleData :any ={
      role_name:''
    }
  constructor(
    private store:Store
  ) { }

  ngOnInit(): void {
  }

   ngOnChanges(changes:SimpleChanges){
      if(changes['roleInput'].currentValue  ){
        this.editRoleFlag=true;
        this.roleData = {...this.roleInput}
      }else{
        this.editRoleFlag=false;
      }
    }

    addToRole(f:any){
      if(f.valid){
        const data = this.roleData;
        if(!this.editRoleFlag){
          this.store.dispatch(addRole({role:data}))
        }else{
          console.log(data)
          this.store.dispatch(editRole({role:data,id:data.id}))
        }
        this.editRoleFlag = false;
        this.roleData ={}
      }
    }

}
