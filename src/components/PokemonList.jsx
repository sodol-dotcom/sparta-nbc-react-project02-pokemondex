// PokemonList.jsx -> 모든 포켓몬을 리스트로 보여주는 컴포넌트

import React from 'react'
import styled from 'styled-components'; // styled-components import cnrk
import PokemonCard from './PokemonCard';

const ListContainer = styled.div`
  background-color: yellow;
`;

const PokemonList = ({ pokemonList, onAdd, selectedPokemon }) => {

  const handleAdd = (pokemon) => {
    // 선택된 포켓몬 목록에 해당 포켓몬이 이미 있는지 확인
    const isAlreadySelected = selectedPokemon.some(selected => selected.id === pokemon.id);

    if(isAlreadySelected) {
      // 이미 선택된 포켓몬인 경우는 경고 메세지 표시
      alert(`${pokemon.korean_name}은(는) 이미 선택된 포켓몬입니다.`);
    } else {
      onAdd(pokemon); // 이미 선택된 포켓몬 목록에 없는 경우에만 추가
    }
  };

  return (
    <ListContainer>
      {pokemonList.map(pokemon => (
        <PokemonCard 
        key={pokemon.id}
        pokemon={pokemon}
        onAdd={handleAdd}  // 수정된 handleAdd 호출
        isSelected={selectedPokemon.some(selected =>selected.id === pokemon.id)} // 포켓몬이 선택된 상태인지 확인
        />
      ))}  
    </ListContainer>
  );
};

export default PokemonList;