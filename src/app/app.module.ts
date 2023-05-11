import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './shared/componets/dashboard/dashboard.component';
import { UsersComponent } from './shared/componets/users/users.component';
import { ProductsComponent } from './shared/componets/products/products.component';
import { NavbarComponent } from './shared/componets/navbar/navbar.component';
import { ProductComponent } from './shared/componets/products/product/product.component';
import { UserComponent } from './shared/componets/users/user/user.component';
import { PageNotFoundComponent } from './shared/componets/page-not-found/page-not-found.component';
import { EditProductComponent } from './shared/componets/products/edit-product/edit-product.component';
import { EditUserComponent } from './shared/componets/users/edit-user/edit-user.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    UsersComponent,
    ProductsComponent,
    NavbarComponent,
    ProductComponent,
    UserComponent,
    PageNotFoundComponent,
    EditProductComponent,
    EditUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
