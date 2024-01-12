import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './homePage/homePage.component';
import { AboutPageComponent } from './aboutPage/aboutPage.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { SearchBoxComponent } from './components/search-box/search-box.component';



@NgModule({
  declarations: [
    AboutPageComponent,
    HomePageComponent,
    SidebarComponent,
    SearchBoxComponent,
    
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    AboutPageComponent,
    HomePageComponent,
    SearchBoxComponent,
    SidebarComponent,

    

  ]
})
export class SharedModule { }
