import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { HeaderComponent } from './header/header.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeItemComponent } from './recipes/recipe-list/recipe-item/recipe-item.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { DropdownDirective } from './shared/dropdown.directive';

@NgModule({
  declarations: [
    AppComponent,
    ShoppingListComponent,
    HeaderComponent,
    ShoppingEditComponent,
    RecipeListComponent,
    RecipesComponent,
    RecipeItemComponent,
    RecipeDetailComponent,
    DropdownDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
