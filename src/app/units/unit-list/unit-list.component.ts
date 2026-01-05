import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Store } from '@ngrx/store';
import { Observable, observable } from 'rxjs';
import { deleteUnit, loadUnit } from '../unit.action';
import { selectUnit } from '../unit.selector';

@Component({
  selector: 'app-unit-list',
  templateUrl: './unit-list.component.html',
  styleUrls: ['./unit-list.component.scss']
})
export class UnitListComponent implements OnInit {

  displayedColumns : string [] = ['no','unit_name','actions']
  dataSource = new MatTableDataSource<any>();
  unit$ :Observable<any>;
  editUnitFlag:boolean=false;
  unitInput:any;
  constructor(
    private store:Store
  ) {
    this.store.dispatch(loadUnit());
    this.unit$ = this.store.select(selectUnit)
  }

  ngOnInit(): void {
    this.unit$.subscribe((res:any)=>{
      this.dataSource.data = res
    })
  }

  editUnit(unit:any){
    this.editUnitFlag= true;
    this.unitInput = {...unit}
  }

  deleteUnit(unit:any){
    this.store.dispatch(deleteUnit({unit:unit,id:unit.id}))
  }

}
