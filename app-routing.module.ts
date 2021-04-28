import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { MobileComponent } from './product/mobile/mobile.component';
import { ProductComponent } from './product/product.component';
import { TvComponent } from './product/tv/tv.component';

const routes: Routes = [
  {path:'', redirectTo:'home', pathMatch:'full'},
  {path:'home', component:HomeComponent},
  {path:'about', component:AboutComponent},
  {path:'product',  children:[ // child route
    {path:'', component:ProductComponent},
    {path:'tv', component:TvComponent},
    {path:'mobile', component:MobileComponent},
  ]
},
//   {path:'product',  component:ProductComponent, children:[ // nested  rute
//     {path:'tv', component:TvComponent},
//     {path:'mobile', component:MobileComponent},
//   ]
// },
  {path:'**', component:PagenotfoundComponent},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponet = [HomeComponent, ProductComponent, PagenotfoundComponent]
