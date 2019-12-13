import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { ProductAddForm1Component } from './product/product-add-form1/product-add-form1.component';
import { ProductAddForm2Component } from './product/product-add-form2/product-add-form2.component';


const routes: Routes = [
{path:'product',component : ProductComponent},
{path:'product-add-1',component : ProductAddForm1Component},
{path:'product-add-2',component : ProductAddForm2Component},
{path:'',redirectTo:'product',pathMatch:'full'},
{path:'product/category/:categoryId',component:ProductComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
