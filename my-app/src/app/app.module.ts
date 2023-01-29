import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContainerComponent } from './Container/container.component';
import { NavComponent } from './nav/nav.component';
import { HeaderComponent } from './header/header.component';
import { SearchComponent } from './search/search.component';
import { FormsModule } from '@angular/forms';
import { NotificationComponent } from './notification/notification.component';
import { ProductsComponent } from './products/products.component';
import { AngularComponent } from './angular/angular.component';
import { ReactComponent } from './react/react.component';

@NgModule({
  declarations: [
    AppComponent, ContainerComponent, NavComponent, HeaderComponent, SearchComponent, NotificationComponent, ProductsComponent, AngularComponent, ReactComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
