import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { deleteSupplier, loadSupplier } from '../supplier.action';
import { selectSupplier } from '../supplier.selector';

@Component({
  selector: 'app-supplier-list',
  templateUrl: './supplier-list.component.html',
  styleUrls: ['./supplier-list.component.scss']
})
export class SupplierListComponent implements OnInit {

  editSupplierFlag:boolean=false;
  supplierInput:any;
  displayedColumns:string[] =['no','supplier_name','phone','actions']
  dataSource = new MatTableDataSource<any>()
  sup$:Observable<any>
  constructor(
    private store:Store
  ) {
    this.store.dispatch(loadSupplier())
    this.sup$ = this.store.select(selectSupplier)
  }

  ngOnInit(): void {
    this.sup$.subscribe((res:any)=>{
      this.dataSource.data= res
    })
  }

  editSupplier(supplier:any){
    this.editSupplierFlag= true;
    this.supplierInput = {...supplier}

  }

  deleteSupplier(supplier:any){
    this.store.dispatch(deleteSupplier({supplier:supplier,id:supplier.id}))
  }

}
