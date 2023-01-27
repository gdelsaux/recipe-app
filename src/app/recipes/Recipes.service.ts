import { Recipe } from "./recipe.model";
import {EventEmitter} from "@angular/core";

export class RecipesService{
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('The best pizza', 'some bread, tomato sauce and cheese', 'https://www.cookipedia.co.uk/wiki/images/a/a7/Spam_pizza_recipe.jpg'),
    new Recipe('Beer chicken', 'beer, chicken and an oven', 'https://www.cookipedia.co.uk/wiki/images/7/7e/Tex-Mex_beercan_chicken_recipe.jpg')
  ]

 getRecipes() {
    return this.recipes.slice();
 }

}
