import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeComponent } from './home/home.component';
import { CreatBlogComponent } from './creat-blog/creat-blog.component';
import { BlogPubComponent } from './blog-pub/blog-pub.component';
import { DescBlogComponent } from './desc-blog/desc-blog.component';
import { CompMapsComponent } from './comp-maps/comp-maps.component';
import { GoogleMapsModule } from "@angular/google-maps";
import { ContactComponent } from './contact/contact.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthentificationComponent } from './authentification/authentification.component';
import { LogoutComponent } from './logout/logout.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    CreatBlogComponent,
    BlogPubComponent,
    DescBlogComponent,
    CompMapsComponent,
    ContactComponent,
    AuthentificationComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GoogleMapsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
