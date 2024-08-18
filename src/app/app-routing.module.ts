import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { ProductComponent } from './product/product.component';
import { SubmitComponent } from './submit/submit.component';
import { ProductImgComponent } from './product-img/product-img.component';
import { ProductVideoComponent } from './product-video/product-video.component';


const routes: Routes = [
  {
path:'',
component:HomeComponent
  },
  {
path:'about',
component:AboutComponent
},
{
  path:'contact',
  component:ContactComponent
},
{
  path:'product',
  component:ProductComponent
},
{
path:'submit',
component:SubmitComponent
},
{
  path:'productImg',
  component:ProductImgComponent
},
{
  path:'productVideo',
  component:ProductVideoComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
