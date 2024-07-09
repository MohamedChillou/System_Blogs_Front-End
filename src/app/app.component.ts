import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, Event } from '@angular/router';
import { filter } from 'rxjs/operators';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'Blogs';
  showNavbar = true;

  constructor(private router:Router) {
  }

  ngOnInit(): void {
    this.router.events
    .pipe(filter(event => event instanceof NavigationEnd))
    .subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        const hideNavbarRoutes = ['/connexion', '/signup'];
        this.showNavbar = !hideNavbarRoutes.includes(event.urlAfterRedirects);
      }
    });
  }

}
