import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserListComponent } from './users/user-list/user-list.component';
import { ProductListComponent } from './products/product-list/product-list.component';
import { CategoryListComponent } from './category/category-list/category-list.component';
import { UnitListComponent } from './units/unit-list/unit-list.component';
import { SupplierListComponent } from './suppliers/supplier-list/supplier-list.component';
import { StockListComponent } from './stock-transaction/stock-list/stock-list.component';
import { ReportsComponent } from './stock-transaction/reports/reports.component';
import { RoleListComponent } from './roles/role-list/role-list.component';

const routes: Routes = [
  { path:'login', component:LoginComponent},
  { path:'' , redirectTo:'login' ,pathMatch:'full'},
  { path:'register' , component:RegisterComponent },
  { path:'users' , component:UserListComponent },
  { path:'products', component:ProductListComponent},
  { path:'categories', component:CategoryListComponent},
  { path:'units', component:UnitListComponent},
  { path:'suppliers', component:SupplierListComponent},
  { path:'stocks', component:StockListComponent},
  { path:'reports' ,component:ReportsComponent},
  { path:'roles' , component:RoleListComponent}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
