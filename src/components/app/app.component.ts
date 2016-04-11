import { Component } from 'angular2/core';
import { RouteConfig, RouterOutlet } from 'angular2/router';
import { HeaderComponent } from '../header/header.component';
import { HomeComponent } from '../home/home.component';
import { ShopComponent } from '../shop/shop.component';
import { FitnessComponent } from '../fitness/fitness.component';
import { EventComponent } from '../event/event.component';

const template: string = require('./app.html');

@RouteConfig([
  { path:'/' ,name: 'Home' ,component: HomeComponent ,useAsDefault: true },
  { path:'/shop' ,name: 'Shop' ,component: ShopComponent },
  { path:'/fitness' ,name: 'Fitness' ,component: FitnessComponent },
  { path:'/event' ,name: 'Event' ,component: EventComponent }
])

@Component({
  selector: 'my-app',
  directives: [RouterOutlet, HeaderComponent],
  template
})

export class AppComponent {}
