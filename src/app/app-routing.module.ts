import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";



const appRoutes: Routes = [
    { path: '', redirectTo: '/recipes', pathMatch: 'full' }, //path that we will reach when we load the app for the first time. only redirect if full path is empty
    { path: 'recipes', 
     loadChildren:'./recipes/recipes.module#RecipesModule'},
    { path: 'shopping-list', loadChildren:'./shopping-list/shopping.list.module#ShoppingListModule'},
    { path: 'auth', loadChildren:'./auth/auth.module#AuthModule'},
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes, {preloadingStrategy: PreloadAllModules})
    ], 
    exports: [RouterModule]
})

export class AppRoutingModule {

}