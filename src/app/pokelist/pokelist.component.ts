import { Component, OnInit } from '@angular/core';
import { PokeService } from '../poke-service.service'
@Component({
  selector: 'app-pokelist',
  templateUrl: './pokelist.component.html',
  styleUrls: []
})
export class PokelistComponent implements OnInit {

  public pokemons?: any[];

  constructor(private dataService: PokeService) { }

  ngOnInit(): void {
    this.dataService.all_pokemons().subscribe((pokemons: any) => {
      this.pokemons = pokemons.results;
    })
  }

}
