// PokemonCard.jsx -> 개별 포켓몬의 정보를 카드 형식으로 보여주는 컴포넌트

import React from 'react';
import styled from 'styled-components';

const Card = styled.div`

`;

const Button = styled.button`

`;

function PokemonCard({ pokemon, onAdd, onRemove, isSlected }) {
  return (
    <Card>
      <img src={pokemon.image} alt={pokemon.korean_name} />    {/* alt는 이미지가 나오지 않을때의 대체 텍스트 */}
      <p>{ppokemon.korean_name}</p>
      {isSlected ? (
        <Button onClick={() => {onRemove(pokemon)}}>삭제</Button>
      ) : (
        <Button onClick={() => {onAdd(pokemon)}}>추가</Button>
      )}
    </Card>
  );
}

export default PokemonCard;

// 각 포켓몬에 대한 정보 카드 형태로 보여주기
// 각 포켓몬 카드를 클릭하면 해당 포켓폰의 디테일 페이지로 이동
// 디테일 페이지에서는 queryString을 통해 전달받은 '포켓몬 ID'를 이용해 해당 포켓몬의 상세 정보 표시
// 뒤로가기 버튼 구현하여 이전 페이지로 쉽게 돌아갈 수 있게 하기
