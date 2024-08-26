import React from "react";
import styled from "styled-components";

const DashboardContainer = styled.div`
  background-color: #f0f0f0;
  font-family: "DungGeunMo";
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 36px;
  padding-left: 6%;
  padding-right: 6%;
  gap: 20px;
  margin: 0 auto; /* 자동으로 가운데 정렬 */
  box-sizing: border-box; /* 패딩을 포함한 너비 계산 */
`;

const PokemonWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center; /* 중앙 정렬 */
  gap: 15px; /* 카드 사이의 간격 */
  box-sizing: border-box;
  width: 100%;
  max-width: 1200px; /* 최대 너비 설정 */
`;

const PokemonCard = styled.div`
  background-color: white;
  display: flex;
  justify-content: center; /* 수직 중앙 정렬 */
  flex-direction: column;
  align-items: center;
  border: 1px solid #ddd; /* 카드의 테두리 */
  border-radius: 4px;
  padding: 20px;
  box-sizing: border-box;
  max-width: 175px; /* 카드의 최대 너비 설정 */
  width: 175px; /* 카드의 고정 너비 설정 */
  
  img {
    margin-top: 10px;
    width: 65%; /* 이미지의 상대적 너비 설정 */
    height: auto;
    object-fit: cover; /* 이미지 비율 유지 */
    border-radius: 4px; /* 이미지의 둥근 모서리 */
  }

  button {
    font-family: "DungGeunMo";
    margin-top: 8px;
    padding: 4.5px 8px;
    border: 1px solid;
    background-color: #8e8e8e;
    color: white;
    cursor: pointer;
    border-radius: 4px;
    font-size: 11px;
    transition: background-color 0.3s ease, transform 0.2s ease; /* 배경색과 변형에 애니메이션 추가 */

    &:hover {
      background-color: #595959; /* 호버 시 배경색 변경 */
      transform: scale(1.05); /* 호버 시 버튼 크기 확대 효과 */
    }

    &:active {
      background-color: #222; /* 클릭 시 배경색 더 어두운 색으로 변경 */
    }
  }
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
`;

const Message = styled.p`
  color: #969696;
  font-size: 18px;
  text-align: center; /* 중앙 정렬 */
`;

const Dashboard = ({ selectedPokemon, onRemove }) => {
  console.log("Selected Pokemon IDs:", selectedPokemon.map(pokemon => pokemon.id));

  return (
    <DashboardContainer>
      <h2>선택된 포켓몬</h2>
      {selectedPokemon.length === 0 ? (
        <Message>『 앗! 선택된 포켓몬이 없네요. 포켓몬이 기다리고 있으니 선택해 주세요! 』</Message>
      ) : (
        <PokemonWrapper>
          {selectedPokemon.map((pokemon) => (
            <PokemonCard key={pokemon.id}>
              <PokemonNO>NO.{pokemon.id}</PokemonNO>
              <img src={pokemon.img_url} alt={pokemon.korean_name} />
              <h3>{pokemon.korean_name}</h3>
              <button onClick={() => onRemove(pokemon)}>삭제</button>
            </PokemonCard>
          ))}
        </PokemonWrapper>
      )}
    </DashboardContainer>
  );
};

export default Dashboard;
