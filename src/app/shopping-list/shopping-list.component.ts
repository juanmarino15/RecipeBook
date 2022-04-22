import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { LoggingService } from '../logging.service';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Ingredient[]
  private igChangesub: Subscription; //need this to clean up subscription as good practice

  constructor(private slService: ShoppingListService, private loggingService: LoggingService ){ }

  ngOnInit() {
    this.ingredients = this.slService.getIngredients();
   this.igChangesub = this.slService.ingredientsChanged
      .subscribe(
          (ingredients: Ingredient[]) => {
            this.ingredients = ingredients;
          }
      );

      this.loggingService.printLog('Hello from shopping list component ngOnInit')
  }

  onEditItem(index: number){
    this.slService.startedEditing.next(index);
  }

  ngOnDestroy(): void {
      this.igChangesub.unsubscribe();
  }
}
