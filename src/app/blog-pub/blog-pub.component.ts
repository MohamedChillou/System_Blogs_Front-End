import { Component, Input, OnInit } from '@angular/core';
import { BlogServicesService } from '../blog-services.service';

@Component({
  selector: 'app-blog-pub',
  templateUrl: './blog-pub.component.html',
  styleUrl: './blog-pub.component.css'
})
export class BlogPubComponent implements OnInit {

  imageData :any ;
  @Input() id : number = 0  ;
  @Input() category : string = "";
  @Input() titre : string = "";
  @Input() url : string = "";
  @Input() date : string ="";
  @Input() user :string = "";
  @Input() image :any;
  local : string ="" 
 
  constructor(private service:BlogServicesService) {
    
  }
ngOnInit(): void {
  this.service.checkedLogin();
  this.imageData = this.service.regleImage(this.image.imageData);
  this.local ="description-Blog/"+this.id
  
}

}
