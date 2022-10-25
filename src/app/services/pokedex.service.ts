import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PokedexService {

  constructor(private http: HttpClient) { }


  getPokemons(): any {
    return this.http.get('https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/pokedex.json').toPromise().then(res => {
      return res
    });
  }
}
