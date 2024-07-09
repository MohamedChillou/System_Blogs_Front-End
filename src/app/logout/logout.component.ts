import { Component, OnInit } from '@angular/core';
import { BlogServicesService } from '../blog-services.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrl: './logout.component.css'
})
export class LogoutComponent implements OnInit {
  constructor(private service : BlogServicesService) {}
  ngOnInit(): void {
      this.service.logout();
  }
}
