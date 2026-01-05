import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { Store } from '@ngrx/store';
import { addSupplier, editSupplier } from '../supplier.action';

@Component({
  selector: 'app-add-supplier',
  templateUrl: './add-supplier.component.html',
  styleUrls: ['./add-supplier.component.scss']
})
export class AddSupplierComponent implements OnInit {

  @Input() editSupplierFlag:any;
  @Input() supplierInput:any;
  constructor(
    private store:Store
  ) { }


  supplierData:any ={
    supplier_name:'',
    phone:''
  }

  ngOnInit(): void {
  }

  ngOnChanges(changes:SimpleChanges){
    if(this.editSupplierFlag){
      this.supplierData = {...this.supplierInput}
    }
  }

  addToSupplier(f:any){
    if(f.valid){
      const data = this.supplierData;
      if(!this.editSupplierFlag){
          this.store.dispatch(addSupplier({supplier:data}))
      }else{
          this.store.dispatch(editSupplier({supplier:data,id:data.id}))
      }
    }
    this.supplierData ={}
  }
}
