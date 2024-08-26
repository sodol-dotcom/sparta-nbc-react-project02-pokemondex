// PokemonList.jsx -> 모든 포켓몬을 리스트로 보여주는 컴포넌트

import React from "react";
import styled from "styled-components"; // styled-components import cnrk
import PokemonCard from "./PokemonCard";
import background from "../assets/background.jpg";

// ListContainer 스타일 컴포넌트
const ListContainer = styled.div`
  display: flex;
  flex-direction: column; /* 수직으로 배치 */
  align-items: center; /* 중앙 정렬 */
  justify-content: center; /* 가운데 정렬 */
  width: 100vw; /* 전체 너비 */
  padding: 0 20px; /* 컨테이너의 좌우 패딩 추가 (균형을 맞추기 위해) */
  box-sizing: border-box; /* 패딩을 포함한 너비 계산 */

  background-image: url(${background}); /* 배경 이미지 설정 */
  background-size: 100% auto; /* 배경 이미지를 컨테이너 전체에 맞추어 확대/축소 */
  background-position: top center; /* 수직으로는 상단에서 시작 */
  background-repeat: repeat-y; /* 배경 이미지를 세로 방향으로 반복 */
`;

const TextContainer = styled.div`
  margin-top: 40px; /* 텍스트와 리스트 사이의 간격 */
  color: #333; /* 텍스트 색상 */
  font-family: "DungGeunMo"; /* 폰트 스타일 적용 */
  font-size: 15px;
  text-align: center; /* 텍스트 가운데 정렬 */
  background-color: rgba(255, 255, 255, 0.8); /* 배경 색상과 투명도 */
  padding: 10px 30px; /* 텍스트 패딩 */
  border-radius: 8px; /* 모서리 둥글게 */
`;

// List 스타일 컴포넌트
const List = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); /* 열 자동 조절 */
  grid-column-gap: 20px; /* 열 간격을 조정 */
  grid-row-gap: 15px; /* 행 간격을 조정 (위아래 간격을 50px로 설정) */
  padding: 30px; /* 전체 리스트의 패딩 */
  max-width: 1200px; /* 최대 너비 설정 */
  box-sizing: border-box; /* 패딩을 포함한 너비 계산 */
  margin: 0 auto; /* 리스트를 가운데 정렬 */
`;

const PokemonList = ({ pokemonList, onAdd, selectedPokemon }) => {
  const handleAdd = (pokemon) => {
    // 선택된 포켓몬 목록에 해당 포켓몬이 이미 있는지 확인
    const isAlreadySelected = selectedPokemon.some(
      (selected) => selected.id === pokemon.id
    );

    if (isAlreadySelected) {
      // 이미 선택된 포켓몬인 경우는 경고 메세지 표시
      alert(`${pokemon.korean_name}은(는) 이미 선택된 포켓몬입니다.`);
    } else {
      onAdd(pokemon); // 이미 선택된 포켓몬 목록에 없는 경우에만 추가
    }
  };

  return (
    <ListContainer>
      <TextContainer>
      카드를 클릭하면 포켓몬의 자세한 정보를 확인할 수 있어요.
      </TextContainer>
      <List>
        {pokemonList.map((pokemon) => (
          <PokemonCard
            key={pokemon.id}
            pokemon={pokemon}
            onAdd={handleAdd} // 수정된 handleAdd 호출
            isSelected={selectedPokemon.some(
              (selected) => selected.id === pokemon.id
            )} // 포켓몬이 선택된 상태인지 확인
          />
        ))}
      </List>
    </ListContainer>
  );
};

export default PokemonList;
