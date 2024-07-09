import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DescBlogComponent } from './desc-blog/desc-blog.component';
import { CreatBlogComponent } from './creat-blog/creat-blog.component';
import { ContactComponent } from './contact/contact.component';
import { AuthentificationComponent } from './authentification/authentification.component';
import { LogoutComponent } from './logout/logout.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'description-Blog/:id',component:DescBlogComponent},
  {path:'create-blog',component:CreatBlogComponent},
  {path:'contact' , component:ContactComponent},
  {path:'connexion' , component:AuthentificationComponent},
  {path:'logout',component : LogoutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
