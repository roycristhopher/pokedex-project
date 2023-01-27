import { useState, useEffect } from "react";
import { PokedexScreen, PokemonForm } from "../../components";

export default function Pokedex() {

  const [pokemon, setPokemon] = useState(null);

  const fetchPokemon = async (pokemon: string) => {
    const response = await fetch(
      "https://pokeapi.co/api/v2/pokemon/${pokemon}"
    );
    const data = await response.json();
    setPokemon(data);
  };

  useEffect(() => {
    fetchPokemon("1");
  }, []);


  return (
    <div className="pokedex">
      <div className="pokedex-left">
        <div className="pokedex-left-top">
          <div className='light is-sky is-big' />
          <div className="light is-red" />
          <div className="light is-yellow" />
          <div className="light is-green" />
        </div>
        <div className="pokedex-screen-container">
          <PokedexScreen />
        </div>
        <div className="pokedex-left-bottom">
          <div className="pokedex-left-bottom-lights">
            <div className="light is-blue is-medium" />
            <div className="light is-green is-large" />
            <div className="light is-orange is-large" />
          </div>
          <PokemonForm />
        </div>
      </div>
      <div className="pokedex-right-front" />
      <div className="pokedex-right-back" />
    </div>
  );
}