import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PokedexService {

  constructor(private http: HttpClient) { }


  getPokemons(): any {
    return this.http.get('http://localhost:4200/assets/mock-data.json').toPromise().then(res => {
      return res
    });
  }
}
