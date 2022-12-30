import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';

import { Ingredient } from "../../shared/ingredient.model";

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @Output() newIngredientEmitter = new EventEmitter<{name: string, quantity: number}>();
  @ViewChild('nameInput', {static: false}) nameInputRef: ElementRef<HTMLInputElement>;
  @ViewChild('quantityInput', {static: false}) quantityInputRef: ElementRef<HTMLInputElement>;

  constructor() { }

  ngOnInit(): void {
  }

  formAction(event: Event) {
    event.preventDefault();
    const ingredientName: string = this.nameInputRef.nativeElement.value;
    const ingredientQuantity: number = +this.quantityInputRef.nativeElement.value;
    const newIngredient = new Ingredient(ingredientName, ingredientQuantity);
    this.newIngredientEmitter.emit(newIngredient)
  }

}
