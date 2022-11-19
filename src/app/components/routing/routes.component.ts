import { Component, NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

@Component({
    template: '<div>Search Component</div>',
    selector: 'search'
})
export class SearchComponent {
        
}


@Component({
    template: '<div>Home Component</div>',
    selector: 'home',
})
export class HomeComponent {
    
}



export const routes: Routes = [
    {path:'', redirectTo: 'home', pathMatch:'full'},
    {path:'home', component: HomeComponent},
    {path:'search', component: SearchComponent},
  ];


  
 @NgModule({
    imports: [RouterModule.forRoot(routes)], 
    exports: [RouterModule] 
 })
 export class AppRoutingModule { } 