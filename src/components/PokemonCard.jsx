import React from 'react'

function PokemonCard ({ pokemon, onAdd }) {
  return (
    <div>
      PokemonCard
      <img src={pokemon.image} alt={pokemon.name} />    {/* alt는 이미지가 나오지 않을때의 대체 텍스트 */}
      <h3>{pokemon.name}</h3>
      <button onClick={() => onAdd(pokemon)}>추가</button>
    </div>
  );
}

export default PokemonCard