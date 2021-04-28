import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerComponent } from './customer/customer.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProductComponent } from './product/product.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { TvComponent } from './product/tv/tv.component';
import { MobileComponent } from './product/mobile/mobile.component';


@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    HomeComponent,
    AboutComponent,
    ProductComponent,
    PagenotfoundComponent,
    TvComponent,
    MobileComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
