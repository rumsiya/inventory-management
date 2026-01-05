import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';
import { loadStock } from '../stock.action';
import { Store } from '@ngrx/store';
import { selectStock } from '../stock.selector';
import { MatPaginator } from '@angular/material/paginator';
import { selectUnit } from 'src/app/units/unit.selector';

@Component({
  selector: 'app-stock-list',
  templateUrl: './stock-list.component.html',
  styleUrls: ['./stock-list.component.scss']
})
export class StockListComponent implements OnInit {

  columnFilter :any ={
    stock_id:'',
    product_name:'',
    type:'',
    quantity:null,
    unit_id:0
  }

  displayedColumns:string[] = ['no','stock_id','product_name','type','quantity','unit']
  dataSource = new MatTableDataSource<any>();
  stock$:Observable<any>;
  unit$:Observable<any>;

  @ViewChild(MatPaginator) paginator!:MatPaginator
  constructor(
    private store:Store
  ) {
     this.store.dispatch(loadStock())
      this.stock$ = this.store.select(selectStock);
      this.unit$ = this.store.select(selectUnit)

   }

  ngOnInit(): void {

    this.stock$.subscribe((res:any)=>{
      this.dataSource.data = res
    })

    this.dataSource.filterPredicate =((data:any , filter:any)=>{
            const searchData = JSON.parse(filter);
            console.log('FILTER:', searchData.type, 'DATA:', data.type);


            return (
              (data.stock_id).toLowerCase().includes(searchData.stock_id)&&
              (data.get_product.product_name).toLowerCase().includes(searchData.product_name) &&

              (data.quantity == Number(searchData.quantity) || (searchData.quantity=='' || searchData.quantity==null)) &&
              ((data.unit_id === searchData.unit_id) || (searchData.unit_id==0)) &&
               (data.type === searchData.type)
            )
      }
    )
  }
  ngAfterViewInit(){
    this.dataSource.paginator = this.paginator
  }

  applyFilter(column:string,event:any){
    let filterVal =''
    if(column =='unit_id'  || column=='type'){

       filterVal = event.value||'';
       console.log(filterVal)

    }
    else if(column =='quantity'){
       filterVal = (event.target as HTMLInputElement).value


    }
    else{
       filterVal = (event.target as HTMLInputElement).value.trim().toLowerCase();
    }

    this.columnFilter[column] = filterVal;
    this.dataSource.filter = JSON.stringify(this.columnFilter)
    console.log(this.dataSource.filter)
  }


}
