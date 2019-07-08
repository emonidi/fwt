import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { TestService } from './test.service';
import { SmallCityCardComponent } from './small-city-card/small-city-card.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule, Routes }  from '@angular/router';
import {AppRoutes} from './routes';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    SmallCityCardComponent,
    NavbarComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(AppRoutes,{enableTracing:true}),
  ],
  providers: [TestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
