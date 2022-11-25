import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('The best pizza', 'some bread, tomato sauce and cheese', 'https://www.cookipedia.co.uk/wiki/images/a/a7/Spam_pizza_recipe.jpg'),
    new Recipe('The best pizza', 'some bread, tomato sauce and cheese', 'https://www.cookipedia.co.uk/wiki/images/a/a7/Spam_pizza_recipe.jpg')
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
