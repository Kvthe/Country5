import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { AboutPageComponent } from "./shared/aboutPage/aboutPage.component";
import { HomePageComponent } from "./shared/homePage/homePage.component";



const routes: Routes = [
{
    path:'home',
    component: HomePageComponent
},
{
    path:'about',
    component: AboutPageComponent
},
{
    path:'countries',
    loadChildren: () => { return  import('./countries/countries.module').then(m =>m.CountriesModule)}
},

{
    path:'**',
    redirectTo: 'countries'
}

]

@NgModule({
    imports:[
        RouterModule.forRoot(routes)
    ],
    exports:[
        RouterModule
    ]
})
export class AppRoutingModule { }
