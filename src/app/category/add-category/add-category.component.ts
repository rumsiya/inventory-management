import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { addCategory, editCategory } from '../category.action';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.scss']
})
export class AddCategoryComponent implements OnInit,OnChanges {

  categoryData:any={
    category_name:''
  }

  @Input() categoryInput:any
  @Input() editCatFlag:any;
  constructor(
    private store:Store
  ) {

  }

  ngOnInit(): void {
  }

  ngOnChanges(changes:SimpleChanges){
    if(changes['categoryInput'].currentValue){
      this.editCatFlag=true;
      this.categoryData = {...this.categoryInput}
    }else{
      this.editCatFlag=false;
    }
  }



  addToCategory(f:any){
    if(f.valid){
      const data = this.categoryData;
      console.log(data)
      if(!this.editCatFlag){
        this.store.dispatch(addCategory({category:data}))
      }else{
        this.store.dispatch(editCategory({category:data,id:data.id}))
      }

    }
    this.editCatFlag = false;
    this.categoryData ={}
  }

}
