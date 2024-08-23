// PokemonCard.jsx -> 개별 포켓몬의 정보를 카드 형식으로 보여주는 컴포넌트

import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Card = styled.div`
width: 200px;
height: 300px;
margin: 10px;
border: 20px;

background-color: red;

`;

const Button = styled.button`
color: black;
border: none;
padding: 8px 16px;
border-radius: 4px;
cursor: pointer;
margin-top: 12px;

`;

const PokemonName = styled.p`
color: blue;
`;

const PokemonNO = styled.p`
color: black;
`;

function PokemonCard({ pokemon, onAdd }) {
  const navigate = useNavigate();   // useNavigate 훅 사용

  const handleCardClick = () => {
    navigate(`/PokemonDetail/${pokemon.id}`);   // 포켓몬 상세 페이지로 이동
  };
  
  const handleButtonClick = (e) => {
    e.stopPropagation();    // 클릭 이벤트가 카드로 전파되는 것을 방지
    console.log("버튼 클릭됨")
    onAdd(pokemon);   // 포켓몬 추가
  }

  return (
    // 카드 클릭 시 handleCardClick 호출
    <Card onClick={handleCardClick}>
      <img src={pokemon.img_url} alt={pokemon.korean_name} />    {/* alt는 이미지가 나오지 않을때의 대체 텍스트 */}
      <PokemonName>{pokemon.korean_name}</PokemonName>
      <PokemonNO>NO. {pokemon.id}</PokemonNO>
        <Button onClick={handleButtonClick}>추가</Button>
    </Card>
  );
}

export default PokemonCard;

// 각 포켓몬에 대한 정보 카드 형태로 보여주기
// 각 포켓몬 카드를 클릭하면 해당 포켓몬의 디테일 페이지로 이동
// 디테일 페이지에서는 queryString을 통해 전달받은 '포켓몬 ID'를 이용해 해당 포켓몬의 상세 정보 표시
// 뒤로가기 버튼 구현하여 이전 페이지로 쉽게 돌아갈 수 있게 하기
