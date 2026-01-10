import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { deleteRole, loadRole } from '../role.action';
import { selectRole } from '../role.selector';

@Component({
  selector: 'app-role-list',
  templateUrl: './role-list.component.html',
  styleUrls: ['./role-list.component.scss']
})
export class RoleListComponent implements OnInit {

  displayedColumns : string [] = ['no','role_name','actions']
  dataSource = new MatTableDataSource<any>();
  role$ :Observable<any>;
  editRoleFlag:boolean=false;
  roleInput:any;
  constructor(
    private store:Store
  ) {
     this.store.dispatch(loadRole());
    this.role$ = this.store.select(selectRole)
  }

  ngOnInit(): void {
    this.role$.subscribe((res:any)=>{
    this.dataSource.data = res
    console.log(res)
    })
  }

  editRole(role:any){
      this.editRoleFlag= true;
      this.roleInput = {...role}
  }

  deleteRole(role:any){
    this.store.dispatch(deleteRole({role:role,id:role.id}))
  }
}
