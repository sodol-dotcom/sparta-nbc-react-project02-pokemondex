// PokemonList.jsx -> 모든 포켓몬을 리스트로 보여주는 컴포넌트

import React from 'react'
import PokemonCard from './PokemonCard';

const ListContainer = styled.div`

`;

const PokemonList = ({ pokemonList, onAdd }) => {
  return (
    <ListContainer>
      {pokemonList.map((pokemon) => (
        <PokemonCard
          key={pokemon.id}
          pokemon={pokemon}
          // onAdd 함수가 클릭 이벤트 등을 처리할 부분에,로직 추가하기
          onAdd={() => {onAdd(pokemon)}}
          isSelected={false}
          />
      ))}  
    </ListContainer>
  );
};

export default PokemonList