import { Component, OnInit } from "@angular/core";
import { Pokemon } from "src/app/models/pokemon";
import { PokedexService } from "src/app/services/pokedex.service";
@Component({
  selector: "app-pokedex",
  templateUrl: "./pokedex.component.html",
  styleUrls: ["./pokedex.component.css"],
})
export class PokedexComponent implements OnInit {
  pokemons: [Pokemon] = [
    {
      id: 0,
      name: { english: "" },
      type: ["", ""],
      species: "",
      image: { hires: "" },
    },
  ];

  filteredPokemons: any;

  searchValue: string = "";

  constructor(private pokedexService: PokedexService) {}

  ngOnInit(): void {
    this.getPokemons();
  }

  async getPokemons() {
    const pokemons = await this.pokedexService.getPokemons();

    this.pokemons = pokemons;
    this.filteredPokemons = this.pokemons;
  }

  search(event: any) {
    this.searchValue = event.target.value.toLowerCase();
    this.filteredPokemons = this.pokemons.filter((pokemon: Pokemon) => {
      return (
        pokemon.id.toString().includes(this.searchValue) ||
        pokemon.name.english.toLowerCase().includes(this.searchValue) ||
        pokemon.type.some((category) =>
          category.toLowerCase().includes(this.searchValue)
        )
      );
    });
  }
}
