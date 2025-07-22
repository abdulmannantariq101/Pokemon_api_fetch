import "./Styles/Pokemon.css";

const PokemonCard = ({
  name,
  image,
  height,
  weight,
  baseExp,
  abilities,
  types,
  moves,
  stats,

}) => {
  return (
    <div className="pokemon-card">
      <img src={image} alt={name} />
      <h3>{name}</h3>

      <div className="pokemon-details">
        <p><strong>Type:</strong> {types.map(t => t.type.name).join(", ")}</p>
        <p><strong>Height:</strong> {height}</p>
        <p><strong>Weight:</strong> {weight}</p>
        <p><strong>Base XP:</strong> {baseExp}</p>
        <p><strong>Abilities:</strong> {abilities.map(a => a.ability.name).join(", ")}</p>

        <p><strong>Total Moves:</strong> {moves.length}</p>
        <p><strong>First 5 Moves:</strong> {moves.slice(0, 5).map(m => m.move.name).join(", ")}</p>

        <p><strong>Stats:</strong></p>
        <ul>
          {stats.map(stat => (
            <li key={stat.stat.name}>
              {stat.stat.name}: {stat.base_stat}
            </li>
          ))}
        </ul>

     
      </div>
    </div>
  );
};

export default PokemonCard;
