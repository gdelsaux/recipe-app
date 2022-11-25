import { Component, OnInit } from '@angular/core';

import { Ingredient } from "../shared/ingredient.model";

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient('fromage', 4),
    new Ingredient('pizza dough', 1),
    new Ingredient('Tomato sauce', 4)
  ]

  constructor() {}

  ngOnInit(): void {
  }

}
