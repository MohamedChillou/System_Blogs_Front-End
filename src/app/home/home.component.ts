import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { BlogServicesService } from '../blog-services.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
    blog  : any;
    blogs : any;

  constructor(private http:HttpClient,private sanitizer:DomSanitizer,private service:BlogServicesService) {    
  }
  ngOnInit(): void {
    this.service.checkedLogin();
    this.service.getFirstBlog()
      .subscribe({
        next : value =>{
          console.log(value)
          this.blog = value ;
          this.blog.image.imageData = this.service.regleImage(value.image.imageData);
        },
        error: err=> {
            console.log(err);
        },
      })
    ;
    this.service.getAllBlog()
      .subscribe({
         next : value =>{
          this.blogs = value
         }
      })
  }

}
