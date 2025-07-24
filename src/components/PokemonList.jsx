import { useEffect, useState } from "react";
import PokemonCard from "./PokemonCard";
import "./Styles/Pokemon.css";

const PokemonList = ({ searchTerm }) => {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    const fetchPokemons = async () => {
      const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=20");
      const data = await res.json();

      const fullData = await Promise.all(
        data.results.map(async (poke) => {
          const res = await fetch(poke.url);
          return await res.json();
        })
      );

      setPokemons(fullData);
    };

    fetchPokemons();
  }, []);

  // ✅ Filter based on searchTerm
  const filteredPokemons = pokemons.filter((poke) =>
    poke.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="pokemon-list">
      {filteredPokemons.map((poke) => (
        <PokemonCard
          key={poke.id}
          name={poke.name}
          image={poke.sprites.front_default}
          height={poke.height}
          weight={poke.weight}
          baseExp={poke.base_experience}
          abilities={poke.abilities}
          types={poke.types}
          moves={poke.moves}
          stats={poke.stats}
        />
      ))}
    </div>
  );
};

export default PokemonList;
