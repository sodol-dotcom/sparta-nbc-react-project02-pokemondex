// PokemonCard.jsx -> 개별 포켓몬의 정보를 카드 형식으로 보여주는 컴포넌트

import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { usePokemon } from "../context/PokemonContext";  // Context 훅 임포트

const Card = styled.div`
  width: 200px;
  height: 230px;
  margin: 10px;
  padding: 20px;
  border: 1px solid #ccc; /* 적절한 border 스타일 설정 */
  border-radius: 4px; /* 모서리 둥글게 */
  display: flex; /* 플렉스 컨테이너로 설정 */
  flex-direction: column;
  justify-content: center; /* 수직 중앙 정렬 */
  align-items: center; /* 수평 중앙 정렬 */
  background-color: white;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* 카드에 그림자 추가 */

  cursor: url(/assets/magnifier.png) 16 16, pointer;
`;

const PokemonNO = styled.p`
  color: black;
  font-family: "DungGeunMo";
  width: 60px; /* 박스의 너비 설정 */
  height: 20px; /* 박스의 높이 설정 */
  background-color: yellow; /* 박스 배경색 */
  border: 1px solid #000; /* 박스 테두리 */
  border-radius: 15px; /* 모서리 둥글게 */
  display: flex;
  justify-content: center; /* 텍스트 수평 중앙 정렬 */
  align-items: center; /* 텍스트 수직 중앙 정렬 */
  margin-bottom: 5px; /* 아래쪽 여백 추가 */
`;

const StyledButton = styled.button`
  color: white;
  font-size: 15px;
  text-shadow: 1px 1px 0 #000, 
               -1px -1px 0 #000,  
               1px -1px 0 #000, 
               -1px 1px 0 #000;
  font-weight: bold;
  font-family: "DungGeunMo";
  font-size: 15px;
  cursor: pointer;
  box-sizing: border-box; /* padding과 border가 width와 height에 포함되도록 설정 */
`;

const PokemonName = styled.p`
  color: black;
  font-family: "DungGeunMo";
  font-weight: bold;
  height: 30px; /* 버튼 높이 설정 */
  width: 80px; /* 버튼 너비 설정 */
  display: flex; /* Flexbox 사용 */
  justify-content: center; /* 수평 중앙 정렬 */
  align-items: center; /* 수직 중앙 정렬 */
  line-height: normal; /* 텍스트 라인 높이 기본값으로 설정 */
  text-align: center; /* 텍스트 중앙 정렬 */
  `;

function PokemonCard({ pokemon, onAdd, isSelected }) {
  const navigate = useNavigate();       // useNavigate 훅 사용
  const { addPokemon } = usePokemon();  // Context 훅 사용

  const handleCardClick = () => {
    navigate(`/PokemonDetail/${pokemon.id}`); // 포켓몬 상세 페이지로 이동
  };

  const handleButtonClick = (e) => {
    e.stopPropagation(); // 클릭 이벤트가 카드로 전파되는 것을 방지
    console.log("버튼 클릭됨");
    onAdd(pokemon); // Context의 addPokemon 메서드 호출
  };

  return (
    // 카드 클릭 시 handleCardClick 호출
    <>
      <Card onClick={handleCardClick}>
        <PokemonNO>NO.{pokemon.id}</PokemonNO>
        <img src={pokemon.img_url} alt={pokemon.korean_name} />{" "}
        {/* alt는 이미지가 나오지 않을때의 대체 텍스트 */}
        <PokemonName>{pokemon.korean_name}</PokemonName>
        <StyledButton className="rpgui-button" onClick={handleButtonClick}>
          {isSelected ? "선택됨" : "추가"}
        </StyledButton>
      </Card>
    </>
  );
}

export default PokemonCard;

// 각 포켓몬에 대한 정보 카드 형태로 보여주기
// 각 포켓몬 카드를 클릭하면 해당 포켓몬의 디테일 페이지로 이동
// 디테일 페이지에서는 queryString을 통해 전달받은 '포켓몬 ID'를 이용해 해당 포켓몬의 상세 정보 표시
// 뒤로가기 버튼 구현하여 이전 페이지로 쉽게 돌아갈 수 있게 하기
