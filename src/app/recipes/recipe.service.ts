import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Recipe } from './recipe.model';

@Injectable()

export class RecipeService{
    recipesChanged = new Subject<Recipe[]>();

    // private recipes: Recipe[] = [
    //     new Recipe('Neapolitan Pizza Recipe', 'Ingredients needed', 'https://glebekitchen.com/wp-content/uploads/2018/09/pizzamargheritatop.jpg',
    //                 [new Ingredient('Dough',1),new Ingredient('Sauce', 20),new Ingredient('Cheese', 2),new Ingredient('Basil', 4),]),
    //     new Recipe('Cheese Burguer Recipe', 'Ingredients needed', 'https://d1ralsognjng37.cloudfront.net/19cc9e8e-33bc-4816-b58f-a302a64b7f80.jpeg',
    //     [new Ingredient('buns',1), new Ingredient('Meat', 1)])
    //   ];
    private recipes: Recipe[] = [];
    
    constructor(private slService: ShoppingListService){}

    setRecipes(recipes: Recipe[]){
        this.recipes = recipes;
        this.recipesChanged.next(this.recipes.slice());
    }

    getRecipes(){
        return this.recipes.slice(); //this will return a new array which is a copy of the file
    }

    getRecipe(index: number) {
        return this.recipes[index];
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]){
        this.slService.addIngredients(ingredients);
    }

    addRecipe(recipe: Recipe){
        this.recipes.push(recipe);
        this.recipesChanged.next(this.recipes.slice());
    }

    updateRecipe(index: number, newRecipe: Recipe){
        this.recipes[index] = newRecipe;
        this.recipesChanged.next(this.recipes.slice());
    }

    deleteRecipe(index: number){
        this.recipes.splice(index,1);
        this.recipesChanged.next(this.recipes.slice());
    }
}