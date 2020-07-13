import { Component, OnInit } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  activePath = '';

  pages = [
    {
      name: 'Home',
      path: '/menu/home'
    },
    {
      name: 'Register',
      path: '/menu/register'
    },
    {
      name: 'Login',
      path: '/menu/login'
    },
    {
      name: 'Events',
      path: '/menu/events'
    },
    {
      name: 'View an event',
      path: '/menu/view'
    }
  ]

  constructor(private router: Router) {
    this.router.events.subscribe((event: RouterEvent) => {
      this.activePath = event.url
    })
  }

  ngOnInit() {
  }
}

