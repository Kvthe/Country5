import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Country } from '../interfaces/country.interface';
import { Observable, tap } from 'rxjs';


@Injectable({providedIn: 'root'})
export class CountriesService {

    private _apiUrl: string = 'https://restcountries.com/v3.1'

    constructor(private _http: HttpClient) { }
    

    public searchCapital(text:string):Observable<Country[]>{
        const url = `${this._apiUrl}/capital/${text}`;
        return this._http.get<Country[]>(url)
            .pipe(
                tap(countries => console.log('Esto es el tap del servicio: ', countries))
                
            )
    }

    public searchCountry(text:string):Observable<Country[]>{
        const url = `${this._apiUrl}/name/${text}`;
        return this._http.get<Country[]>(url)
    }

    public searchRegion(text:string):Observable<Country[]>{
        const url = `${this._apiUrl}/region/${text}`;
        return this._http.get<Country[]>(url)
    }


}