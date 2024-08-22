// PokemonDetail.jsx -> 사용자가 포켓몬 카드를 클릭했을 때 해당 포켓몬의 상세 정보를 보여주는 페이지
// 포켓몬 카드를 클릭하면 queryString으로 포켓몬 ID를 전달하고,
// 이를 통해 해당 포켓몬의 상세 정보를 표시하는 페이지를 구현

import React from 'react'
import { useNavigate, useParams } from 'react-router-dom';

function PokemonDetail() {

  const { pokemonId } = useParams(); // URL에서 ID를 받아옴
  const navigate = useNavigate(); // 
  const pokemon = MOCK_DATA.find(p => p.id === pokemonId); // 포켓몬 데이터 ID로 찾기

  return (
    <div>
      <h1>{pokemon.name}</h1>
      <img src={pokemon.image} alt={pokemon.name} />
      <p>타입: {pokemon.types.join('. ')}</p>
      <button onClick={() => navigate(-1)}>뒤로 가기</button>
    </div>
  );
}

export default PokemonDetail;