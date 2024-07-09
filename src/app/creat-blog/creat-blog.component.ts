import { Component, OnInit } from '@angular/core';
import { BlogServicesService } from '../blog-services.service';
interface Image {
  fileImage?: File;
  type: string;
}
@Component({
  selector: 'app-creat-blog',
  templateUrl: './creat-blog.component.html',
  styleUrls: ['./creat-blog.component.css'] 
})

export class CreatBlogComponent implements OnInit {
  titre: string = "";
  category: string = "";
  text: string = "";
  image?: File;

  constructor(private service :BlogServicesService) {}
  ngOnInit(): void {
      this.service.checkedLogin();
  }

  uploadImage(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.image = input.files[0];
    } else {
      this.image = undefined;
    }
  }

  showInput(): void {
    if (!this.image) {
        console.error('Aucun image !!');
        return;
    }

    const data = new FormData();
    data.append('FileImage', this.image, this.image.name);
    data.append('Titre', this.titre);
    data.append('category', ''); 
    data.append('Text', this.text);
    data.append('IdUser', '70f66f74-dfe3-41f8-9353-da7824a5c4cd');

    this.service.addBlog(data).subscribe({
        next: value => console.log(value),
        error: err => console.log(err)
    });
}

}
