import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyContainerComponent } from './my-container/my-container.component';
import { TopnavComponent } from './my-container/topnav/topnav.component';
import { HeaderComponent } from './my-container/header/header.component';
import { Textsec1Component } from './my-container/textsec1/textsec1.component';
import { Textsec2Component } from './my-container/textsec2/textsec2.component';
import { DatabindComponent } from './databind/databind.component';
import { ClassStyleComponent } from './databind/class-style/class-style.component';
import { EventbindComponent } from './databind/eventbind/eventbind.component';
import { TwoWaysComponent } from './databind/two-ways/two-ways.component';
 // ngx-bootstrap
 import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
 import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
 import { CarouselModule } from 'ngx-bootstrap/carousel';import { ProgressbarModule } from 'ngx-bootstrap/progressbar';
import { NgifComponent } from './ngif/ngif.component';
import { NgforComponent } from './databind/ngfor/ngfor.component';
import { PushAndSpliceComponent } from './databind/push-and-splice/push-and-splice.component';
import { AboutComponent } from './databind/about/about.component';
import { ContactComponent } from './databind/contact/contact.component';
import { ProductsComponent } from './databind/products/products.component';
import { HomeComponent } from './databind/home/home.component';
import { LoginPageComponent } from './databind/login-page/login-page.component';
import { PageNotFoundComponent } from './databind/page-not-found/page-not-found.component';
import { LaptopComponent } from './databind/products/laptop/laptop.component';
import { MobileComponent } from './databind/products/mobile/mobile.component';
import { WashingMachineComponent } from './databind/products/washing-machine/washing-machine.component';
import { TvComponent } from './databind/products/tv/tv.component';
import { CardComponent } from './databind/card/card.component';
import { ParentComponent } from './databind/parent/parent.component';
import { ChildComponent } from './child/child.component';
import { Card1Component } from './card1/card1.component';
import { Card2Component } from './card2/card2.component';
import { DesignutilityService } from './appServices/designutility.service';


const appRoutes:Routes=[
  {path:'' ,redirectTo:'home', pathMatch:'full'},

  {path:'home' , component:HomeComponent},
  {path:'login' , component:LoginPageComponent},
  {path:'about' , component:AboutComponent},
  {path:'contact' , component:ContactComponent},
  {path:'buy-products', component:ParentComponent},
  {path:'products' , component:ProductsComponent, children:[
  {path:'laptop' , component:LaptopComponent},
  {path:'washingMachine' , component:WashingMachineComponent},
  {path:'Tv' , component:TvComponent},
  {path:'mobile' , component:MobileComponent}
]},
{path:'**' , component:PageNotFoundComponent},

];
@NgModule({
  declarations: [
    AppComponent,
    MyContainerComponent,
    TopnavComponent,
    HeaderComponent,
    Textsec1Component,
    Textsec2Component,
    DatabindComponent,
    ClassStyleComponent,
    EventbindComponent,
    TwoWaysComponent,
    NgifComponent,
    NgforComponent,
    PushAndSpliceComponent,
    AboutComponent,
    ContactComponent,
    ProductsComponent,
    HomeComponent,
    LoginPageComponent,
    PageNotFoundComponent,
    LaptopComponent,MobileComponent,WashingMachineComponent, TvComponent, CardComponent, ParentComponent, ChildComponent, Card1Component, Card2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule ,FormsModule,
    BrowserAnimationsModule,
    BsDatepickerModule.forRoot(),
    CarouselModule.forRoot(),
    ProgressbarModule.forRoot(),
    RouterModule.forRoot(appRoutes),
  ],
  providers: [
    provideClientHydration(),
     DesignutilityService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
