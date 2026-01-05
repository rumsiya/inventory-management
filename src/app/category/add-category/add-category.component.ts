import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { addCategory, editCategory } from '../category.action';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.scss']
})
export class AddCategoryComponent implements OnInit {

  categoryData:any={
    category_name:''
  }

  @Input() categoryInput:any
  @Input() editCatFlag:boolean=false
  constructor(
    private store:Store
  ) {

  }

  ngOnChanges(changes:SimpleChanges){
    if(this.editCatFlag){
      this.categoryData = {...this.categoryInput}
    }
  }



  ngOnInit(): void {
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
    this.categoryData ={}
  }

}
