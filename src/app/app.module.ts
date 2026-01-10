import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { TokenInterceptor } from './interceptor/token.interceptor';
import { UsersModule } from './users/users.module';
import { MainModule } from './main/main.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { StoreModule } from '@ngrx/store';
import { userReducer } from './users/user.reducer';
import { EffectsModule } from '@ngrx/effects';
import { UserEffects } from './users/user.effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { ProductsModule } from './products/products.module';
import { CategoryModule } from './category/category.module';
import { CategoryEffects } from './category/category.effects';
import { categoryReducer } from './category/category.reducer';
import { UnitsModule } from './units/units.module';
import { unitReducer } from './units/unit.reducer';
import { UnitEffects } from './units/unit.effects';
import { supplierReducer } from './suppliers/supplier.reducer';
import { SupplierEffects } from './suppliers/supplier.effects';
import { SuppliersModule } from './suppliers/suppliers.module';
import { productReducer } from './products/product.reducer';
import { ProductEffects } from './products/product.effects';
import { stockReducer } from './stock-transaction/stock.reducer';
import { StockEffects } from './stock-transaction/stock.effects';
import { StockTransactionModule } from './stock-transaction/stock-transaction.module';
import { NgChartsModule } from 'ng2-charts';
import { RolesModule } from './roles/roles.module';
import { RoleEffects } from './roles/role.effects';
import { roleReducer } from './roles/role.reducer';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    UsersModule,
    MainModule,
    BrowserAnimationsModule,
    MatSelectModule,
    MatFormFieldModule,
    ProductsModule,
    CategoryModule,
    UnitsModule,
    SuppliersModule,
    NgChartsModule,
    RolesModule,
     StockTransactionModule,
    StoreModule.forRoot({users:userReducer,categories:categoryReducer,units:unitReducer,suppliers:supplierReducer,products:productReducer,stocks:stockReducer,roles:roleReducer}),
    EffectsModule.forRoot([UserEffects,CategoryEffects,UnitEffects,SupplierEffects,ProductEffects,StockEffects,RoleEffects]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production })
  ],
  providers: [
    {
      provide:HTTP_INTERCEPTORS,
      useClass:TokenInterceptor,
      multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
