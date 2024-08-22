// PokemonDex.jsx -> 도감 페이지를 위한 컴포넌트

import React, { useState } from 'react';
import MOCK_DATA from '../mock';
import Dashboard from './Dashboard';


function PokemonDex() {

  // useState를 사용하여 선택된 포켓몬 관리하는 상태 생성 -> 빈 배열?[], 빈 객체?{}
  const [selectedPokemon, setselectedPokemon] = useState([]);

  // 포켓몬 데이터 배열 (id, name, image 속성 포함)
  const pokemonList = [
    
  ];

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
      {/* prop */}
      <Dashboard selectedPokemon={selectedPokemon} onRemove={removePokemon} />
      <pokemonList pokemonList={MOCK_DATA} onAdd={addPokemon} />
    </div>
  );
}

export default PokemonDex;