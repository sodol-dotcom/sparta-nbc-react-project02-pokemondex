// PokemonList.jsx -> 모든 포켓몬을 리스트로 보여주는 컴포넌트

import React from 'react'
import styled from 'styled-components'; // styled-components import cnrk
import PokemonCard from './PokemonCard';

const ListContainer = styled.div`
  color: yellow;
`;

const PokemonList = ({ pokemonList, onAdd }) => {
  return (
    <ListContainer>
      {pokemonList.map(pokemon => (
        <PokemonCard key={pokemon.id}>
          <img src={pokemon.image} alt={pokemon.name} />
          <h3>{pokemon.name}</h3>
          {/* onAdd 함수가 클릭 이벤트 등을 처리할 부분에,로직 추가하기 */}
          <button onClick={() => onAdd(pokemon)}>추가</button>
        </PokemonCard>
      ))}  
    </ListContainer>
  );
};

export default PokemonList