// PokemonDetail.jsx -> 사용자가 포켓몬 카드를 클릭했을 때 해당 포켓몬의 상세 정보를 보여주는 페이지
// 포켓몬 카드를 클릭하면 queryString으로 포켓몬 ID를 전달하고,
// 이를 통해 해당 포켓몬의 상세 정보를 표시하는 페이지를 구현

import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import MOCK_DATA from "../mock";
import styled from 'styled-components';
import dashboardback from "../assets/dashboardback.png";


// 스타일드 컴포넌트 정의
const PageContainer = styled.div`
  display: flex;
  justify-content: center; /* 수평 중앙 정렬 */
  align-items: flex-start; /* 상단에 정렬 */
  min-height: 100vh; /* 화면 전체 높이 사용 */
  background-color: #f5f5f5; /* 페이지 배경색 */
  padding-top: 45px; /* 상단 여백 추가 */

  /* 배경 이미지 추가 */
  background-image: url(${dashboardback}); /* 배경 이미지 설정 */
  background-size: cover; /* 배경 이미지가 컨테이너를 가득 채우도록 설정 */
  background-position: center; /* 배경 이미지가 중앙에 위치하도록 설정 */
  background-repeat: no-repeat; /* 배경 이미지가 반복되지 않도록 설정 */
`;

const DetailContainer = styled.div`
  font-family: "DungGeunMo";
  background-color: #fff; /* 배경색 흰색으로 변경 */
  text-align: center;
  padding: 30px;
  border: 1px solid #ccc; /* 적절한 border 스타일 설정 */
  border-radius: 4px; /* 모서리 둥글게 */
  width: 540px;
  height: 570px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* 그림자 추가 */
`;

const Title = styled.h1`
  color: black;
  font-family: "DungGeunMo";
  font-weight: bold;
  display: flex; /* Flexbox 사용 */
  flex-direction: column;
  align-items: center; /* 수평 중앙 정렬 */
  gap: 10px;
  margin-top: 20px;
  margin-bottom: 30px;
`;

const PokemonID = styled.span`
  color: black;
  font-family: "DungGeunMo";
  font-size: 18px;
  width: 70px; /* 박스의 너비 설정 */
  height: 20px; /* 박스의 높이 설정 */
  background-color: yellow; /* 박스 배경색 */
  border: 1px solid #000; /* 박스 테두리 */
  border-radius: 15px; /* 모서리 둥글게 */
  display: flex;
  justify-content: center; /* 텍스트 수평 중앙 정렬 */
  margin-bottom: 5px; /* 아래쪽 여백 추가 */
`;

const PokemonImage = styled.img`
  width: 200px;
  height: 200px;
  margin-bottom: 30px;
`;

const Type = styled.p`
  font-size: 16px;
  font-weight: bold;
  color: rgb(72,140,76);
  margin-bottom: 10px;
`;

const Description = styled.p`
  font-size: 1em;
  color: #333;
  margin-bottom: 35px;
`;

const BackButton = styled.button`
  color: white;
  font-size: 30px;
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



function PokemonDetail() {
  const { pokemonId } = useParams();    // URL에서 ID를 받아옴
  const navigate = useNavigate();       // useNavigate 훅 사용
  const pokemon = MOCK_DATA.find((p) => p.id === Number(pokemonId)); // 포켓몬 데이터 ID로 찾기

  // 예외 처리 연습: 포켓몬을 찾지 못했을 경우 예외 처리
  if(!pokemon){
    return <div>포켓몬을 찾을 수 없습니다.</div>;
  }

  return (
    <PageContainer>
      <DetailContainer>
        <Title>
          <PokemonID>NO.{pokemon.id}</PokemonID>
          {pokemon.korean_name}
        </Title>
        <PokemonImage src={pokemon.img_url} alt={pokemon.korean_name} />
        <Type>타입: {pokemon.types.join(", ")}</Type>
        <Description>{pokemon.description}</Description>
        <BackButton className="rpgui-button" onClick={() => navigate(-1)}>뒤로 가기</BackButton>
      </DetailContainer>
    </PageContainer>
  );
}

export default PokemonDetail;
