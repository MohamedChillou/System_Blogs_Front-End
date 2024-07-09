import { CSP_NONCE, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogServicesService } from '../blog-services.service';

@Component({
  selector: 'app-desc-blog',
  templateUrl: './desc-blog.component.html',
  styleUrl: './desc-blog.component.css'
})
export class DescBlogComponent implements OnInit {

  constructor(private routerActive:ActivatedRoute,private service:BlogServicesService) {
    
  }

  format : string = "" ;
  id : number = 0;
  blog : any;
  comnt : string = "";

  ngOnInit(): void {
    console.log("--->"+this.service.token)
      this.service.checkedLogin();
      console.log(this.id);
      this.id = this.routerActive.snapshot.params['id'];
      this.blog = this.service.getBlogId(this.id)
      .subscribe(
        {
          next : value =>{
            console.log(value);
            this.blog = value
            this.blog.image.imageData = this.service.regleImage(this.blog.image.imageData);
          },
          error : err =>{
            console.log(err);
          }
        }
      ) ;

  }

  addComment = () : void => {
    const comment = {  
      idUser : "70f66f74-dfe3-41f8-9353-da7824a5c4cd",
      comment : this.comnt,
      id : this.id
    }
    this.service.addComment(comment)
    .subscribe({
      next : value => {
        alert(`le commentaire est ajoute`);
        this.blog.comments.push(value);
        this.cancel();
      },
      error : err => console.log(err)
    })
  }
  cancel = ():void =>{
    this.comnt = ""
  }
    formatText(text: string): string {
      return text.replace(/\.\s([A-Z])/g, '.\n\n $1');
    }

    get formattedText(): string {
      return this.blog.text ? this.formatText(this.blog.text) : '';
    }


}
