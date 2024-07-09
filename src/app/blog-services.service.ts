import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BlogServicesService{
  url : string ="https://localhost:7017/api";
  urlBlog = "/Blog"
  urlAccount = "/User";
  user : any;
  token : string = "";
  constructor(private http:HttpClient,private sanitizer:DomSanitizer,private route:Router) { }


    getFirstBlog = ():Observable<any> => this.http.get(this.url+this.urlBlog+"/First-blog",{headers:this.getHeader()});
    getAllBlog = ():Observable<any> => this.http.get(this.url+this.urlBlog+"/Get-All",{headers:this.getHeader()});
    getBlogId = (id:number):Observable<any> => this.http.get(this.url+this.urlBlog+"/Get-One-Blog?id="+id,{headers:this.getHeader()});
    addBlog = (blog : any) :Observable<any> => this.http.post(this.url + this.urlBlog +"/Add-Blog",blog,{headers:this.getHeader()});
    addComment = (comment : any) :Observable<any> => this.http.post(this.url + this.urlBlog +"/AddComment",comment,{headers:this.getHeader()});
    login = (body:any):Observable<any> => this.http.post(this.url + this.urlAccount + "/Login",body); 
    logout = ():void =>{
      localStorage.setItem('user', "");
      this.route.navigateByUrl("/connexion");
    }   
    getHeader = ():HttpHeaders => new HttpHeaders().set('Authorization', `Bearer ${this.token}`) ;
    checkedLogin = (): void => {
      let stringUser = localStorage.getItem('user');
      if (stringUser == null || stringUser == "" ) {
         this.route.navigateByUrl('/connexion');
      }else{
        this.token = JSON.parse(stringUser).token.token ;
      }
    };

    regleImage(base64String : any):any {
      return this.sanitizer.bypassSecurityTrustResourceUrl(`data:image/png;base64,${base64String}`);
    }


}
