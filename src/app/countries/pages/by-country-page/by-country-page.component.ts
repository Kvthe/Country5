import { Component } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'countries-by-country-page',
  templateUrl: './by-country-page.component.html',
  styles: [
  ]
})
export class ByCountryPageComponent {

  public countries: Country[]=[];

  constructor(private _countriesService :CountriesService){}

  searchByCountry( texto:string){    
    this._countriesService.searchCountry(texto)
      .subscribe((countries)=> this.countries = countries)    
  }
}
