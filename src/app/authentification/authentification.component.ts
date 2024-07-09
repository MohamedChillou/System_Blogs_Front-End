import { Component } from '@angular/core';
import { BlogServicesService } from '../blog-services.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-authentification',
  templateUrl: './authentification.component.html',
  styleUrl: './authentification.component.css'
})
export class AuthentificationComponent {
  userstore : any = {
    username : "",
    token : undefined
  } ;
  userName:string ="";
  password:string ="";
  user: any ={
    username :"",
    password : "",
  }
  constructor(private service:BlogServicesService,private route:Router) {}

  login = ():void =>{
      this.user.username = this.userName;
      this.user.password = this.password;
      this.service.login(this.user)
        .subscribe({
          next:value =>
            {
              alert(value.message);
              this.userstore.username = this.userName;
              this.userstore.token = value.token;
              localStorage.setItem("user",JSON.stringify(this.userstore));
              this.service.token = value.token.token;
              this.route.navigateByUrl("/");
            },
          error:err => alert(err.error.message)
        })
      ;
  }

}
