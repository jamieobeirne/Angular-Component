import { Component, Input, OnInit } from '@angular/core';
import { Wine } from "../../models/Wine";
import { Food } from "../../models/Food"

@Component({
  selector: 'app-wineitem',
  templateUrl: './wineitem.component.html',
  styleUrls: ['./wineitem.component.css']
})
export class WineitemComponent implements OnInit {

  // @Input Creamos una propiedad del componente o parámetro
  @Input() public Data: Wine;


  constructor() { }

  ngOnInit() {


  }

  increase(): void {
    this.Data.quantityInCart += 1;
  }

  decrease(): void {
    this.Data.quantityInCart -= 1;
  }


}

