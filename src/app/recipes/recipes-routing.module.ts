import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { AuthGuard } from "../auth/auth.guard";
import { Routes } from "@angular/router";
import { RecipeEditComponent } from "../recipes/recipe-edit/recipe-edit.component";
import { RecipeStartComponent } from "../recipes/recipe-start/recipe-start.component";
import { RecipesDetailComponent } from "../recipes/recipes-detail/recipes-detail.component";
import { RecipesResolverService } from "../recipes/recipes-resolver.service";
import { RecipesComponent } from "../recipes/recipes.component";
import { DropdownDirective } from "../shared/dropdown.directive";

const routes: Routes = [
    { path: '', component: RecipesComponent, canActivate:[AuthGuard], children: [
        { path: '', component: RecipeStartComponent },
        { path: 'new', component: RecipeEditComponent},
        { path: ':id', component: RecipesDetailComponent, resolve: [RecipesResolverService]},
        { path: ':id/edit', component: RecipeEditComponent, resolve: [RecipesResolverService]}

    ] }
] ;

@NgModule({
    imports: [RouterModule.forChild(routes)],
    declarations:[
        // DropdownDirective
    ]

})
export class RecipesRoutingModule{

}