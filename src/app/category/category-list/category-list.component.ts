import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { deleteCategory, loadCategory } from '../category.action';
import { selectCat } from '../category.selector';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss']
})
export class CategoryListComponent implements OnInit {

  displayedColumns : string[] = ['no', 'category_name','action' ]

  dataSource = new MatTableDataSource<any>();
  categoryInput:any = [];
  cate$:Observable<any>
  editCatFlag:boolean = false;

  constructor(
    private store : Store
  ) {
    this.store.dispatch(loadCategory());
    this.cate$ = this.store.select(selectCat);
    console.log(this.cate$)
  }

  ngOnInit(): void {
    this.cate$.subscribe((res:any)=>
    {
      console.log(res)
      this.dataSource.data = res;
    })

  }

  editCat(categ:any){
    this.editCatFlag=true;
    this.categoryInput = categ;

  }

  deleteCat(categ:any){
    this.store.dispatch(deleteCategory({category:categ,id:categ.id}))
  }

}
