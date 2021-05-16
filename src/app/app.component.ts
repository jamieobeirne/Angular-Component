import { Component } from '@angular/core';
import { Wine } from './models/Wine';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'pec3-ej3';

  Wine: Wine = {
    name: "Vega Sicilia Unico 2009",
    imageUrl: "../../assets/wine.png",
    price: 19.51,
    isOnSale: true, /**affects background color*/
    quantityInCart: 2,
    foodPairing: [],
  }

}
