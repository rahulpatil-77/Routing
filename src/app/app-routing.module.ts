import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './shared/componets/dashboard/dashboard.component';
import { ProductsComponent } from './shared/componets/products/products.component';
import { UsersComponent } from './shared/componets/users/users.component';
import { UserComponent } from './shared/componets/users/user/user.component';
import { ProductComponent } from './shared/componets/products/product/product.component';
import { PageNotFoundComponent } from './shared/componets/page-not-found/page-not-found.component';
import { EditProductComponent } from './shared/componets/products/edit-product/edit-product.component';
import { EditUserComponent } from './shared/componets/users/edit-user/edit-user.component';

const routes: Routes = [
  
  {
    path: "", redirectTo: "home", pathMatch:"full"
  },
  {
    path: "home", component: DashboardComponent
  },
  {
    path: "users", component: UsersComponent
  },
  {
    path: "users/:usersId", component: UserComponent
  },
  {
    path: "products", component: ProductsComponent
  },
  {
    path: "products/:id", component: ProductComponent
  },
  {
    path: "products/:productsId/edit", component: EditProductComponent
  },
  {
    path: "users/:usersId/edit", component: EditUserComponent
  }
  // {
  //   path:"**", redirectTo: 'pagenotFound'
  // },
  // {
  //   path: "pagenotFound", component: PageNotFoundComponent
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
