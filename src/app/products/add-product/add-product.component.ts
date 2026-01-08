import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { loadCategory } from 'src/app/category/category.action';
import { selectCat } from 'src/app/category/category.selector';
import { loadSupplier } from 'src/app/suppliers/supplier.action';
import { selectSupplier } from 'src/app/suppliers/supplier.selector';
import { loadUnit } from 'src/app/units/unit.action';
import { selectUnit } from 'src/app/units/unit.selector';
import { addProduct, editProduct } from '../product.action';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit ,OnChanges{

  @Input() editProductFlag:any;
  @Input() editProductInput:any;
  productData:any ={
    product_name:'',
    quantity:0,
    price:0.00,
    unit_id:0,
    supplier_id:0,
    category_id:0,
    image:''

  }
  selectedFile!:any;
  categories$!:Observable<any[]>;
  unit$!:Observable<any[]>;
  supplier$!:Observable<any[]>;


  constructor(
    private store:Store
  ) {
    this.store.dispatch(loadCategory());
    this.store.dispatch(loadUnit());
    this.store.dispatch(loadSupplier())
   }

  ngOnInit(): void {
      this.categories$ = this.store.select(selectCat);
      this.unit$ = this.store.select(selectUnit)
      this.supplier$ = this.store.select(selectSupplier)


  }

  ngOnChanges(changes:SimpleChanges){
    if( changes['editProductInput']){
    this.editProductFlag = true;

    this.productData = {...this.editProductInput};
      console.log(this.editProductInput)
    }

  }

  addToProduct(pro:any){
    const data={...this.productData}
    const formData = new FormData();
    formData.append('product_name', data.product_name)
    formData.append('quantity', data.quantity)
    formData.append('unit_id', data.unit_id)
    formData.append('category_id', data.category_id)
    formData.append('price', data.price)
    formData.append('supplier_id', data.supplier_id)
    if(this.selectedFile)
    {
      formData.append('image', this.selectedFile)

    }
    if(!this.editProductFlag){
      this.store.dispatch(addProduct({product:formData}))
    }else{
    console.log(formData)
      formData.append('_method', 'PUT');

      this.store.dispatch(editProduct({product:formData,id:data.id}))
      this.editProductFlag = false;
    }
    this.productData = {
          product_name: '',
          quantity: 0,
          price: 0.00,
          unit_id: 0,
          supplier_id: 0,
          category_id: 0,
          image: ''
        };
  }

  onChangeImage(event:any){
    if(event.target.files[0])
    {
      this.selectedFile = event.target.files[0]
    }
  }

}
