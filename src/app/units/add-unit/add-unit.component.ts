import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { Store } from '@ngrx/store';
import { addUnit, editUnit } from '../unit.action';

@Component({
  selector: 'app-add-unit',
  templateUrl: './add-unit.component.html',
  styleUrls: ['./add-unit.component.scss']
})
export class AddUnitComponent implements OnInit {

  @Input() editUnitFlag:any;
  @Input() unitInput:any;

  unitData :any ={
    unit_name:''
  }
  constructor(
    private store:Store
  ) { }

  ngOnInit(): void {
  }

  ngOnChanges(changes:SimpleChanges){
    if(this.editUnitFlag){
      this.unitData = {...this.unitInput}
    }
  }

  addToUnit(f:any){
    if(f.valid){
      const data = this.unitData;
      if(!this.editUnitFlag){
        this.store.dispatch(addUnit({unit:data}))
      }else{
        console.log(data)
        this.store.dispatch(editUnit({unit:data,id:data.id}))
      }
      this.unitData ={}
    }
  }

}
