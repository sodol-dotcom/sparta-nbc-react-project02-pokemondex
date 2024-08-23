// PokemonDex.jsx -> 도감 페이지를 위한 컴포넌트

import React, { useState } from 'react';
import Dashboard from './Dashboard';
import PokemonList from './PokemonList';


function PokemonDex({ pokemonData }) {

  // useState를 사용하여 선택된 포켓몬 관리하는 상태 생성 -> 빈 배열?[], 빈 객체?{}
  const [selectedPokemon, setselectedPokemon] = useState([]);

  // 포켓몬을 선택하는 로직
  const addPokemon = (pokemon) => {
    if (selectedPokemon.length >= 6) {
      alert('최대 6개의 포켓몬만 선택할 수 있습니다.');
      return;
    }
    setselectedPokemon([...selectedPokemon, pokemon])
  };

  // 포켓몬을 제거하는 로직(필터)
  const removePokemon = (pokemon) => {
    setselectedPokemon(selectedPokemon.filter((p) => p.id !== pokemon.id));
  };

  return (
    <div>
      {/* Dashboard에 prop 전달 */}
      <Dashboard selectedPokemon={selectedPokemon} onRemove={removePokemon} />

      {/* PokemonList 컴포넌트를 통해 포켓몬을 목록 표시하고 포켓몬 추가 및 제거하는 기능 관리 */}
          <PokemonList
          pokemonList={pokemonData} // 포켓몬 목록을 PokemonList에 전달
          onAdd={addPokemon}        // 포켓문 추가 함수 전달
          onRemove={removePokemon}      // 포켓몬 제거 함수 전달
          selectedPokemon={selectedPokemon} // 선택된 포켓몬 목록 전달
          />
    </div>
  );
}

export default PokemonDex;