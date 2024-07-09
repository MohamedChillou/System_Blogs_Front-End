import { Component, OnInit } from '@angular/core';
import { GoogleMapsModule } from "@angular/google-maps";
import { BlogServicesService } from '../blog-services.service';

@Component({
  selector: 'app-comp-maps',
  templateUrl: './comp-maps.component.html',
  styleUrl: './comp-maps.component.css',
})
export class CompMapsComponent implements OnInit {
  
  /**
   *
   */
  constructor(private service:BlogServicesService) {}
  ngOnInit(): void {
    this.service.checkedLogin();
  }
  options: google.maps.MapOptions = {
    mapId: "DEMO_MAP_ID",
    center: { lat: 35, lng: -10 },
    zoom: 5,
  };
  nzLocations : any[] = [
    { lat : -35, lng : -10 },
    ] ; 
}
