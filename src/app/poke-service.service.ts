import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, startWith, tap } from "rxjs/operators";
@Injectable({
  providedIn: 'root'
})
export class PokeService {

  constructor(private http: HttpClient) { }

  all_pokemons():Observable<any> {
    return this.http.get<any>('https://pokeapi.co/api/v2/pokemon')
    .pipe(
      tap(res => localStorage['chash_key'] = JSON.stringify(res)),
      startWith(JSON.parse(localStorage['chash_key'] || '{}')),
      filter(res=>Object.keys(res).length !== 0), 
    );
  }
}
