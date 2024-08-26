// Home.jsx -> 홈 페이지를 위한 컴포넌트
import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import homebackground from "../assets/homebackground.jpg"


// 스타일 정의
const DashboardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  height: 100vh;
  width: 100vw;   /* 전체 너비 */

  background-image: url(${homebackground});
  background-size: cover;   /* 배경 이미지 크기 조정, 컨테이너를 완전히 덮도록 */
  background-position: center;

  background-color: #f0f0f0;
  text-align: center;
  padding-top: 150px; /* 상단에 여백 추가 */
  box-sizing: border-box; /* 패딩이 전체 높이에 영향을 미치지 않도록 설정 */

  font-family: "DungGeunMo";
`;

const Logo = styled.img`
  width: 55%;     /* 기본 크기 설정 */
  height: auto;
  margin-bottom: 20px;

  /* 미디어 쿼리로 로고 크기 조정 */
  @media (max-width: 600px) {
    width: 55%; /* 화면 폭이 600px 이하일 때 크기 조정 */
  }

  @media (min-width: 1300px) {
    width: 700px; /* 화면 폭이 900px 이상일 때 기본 크기 */
  }
`;

const StyledButton = styled.button`
  color: white;
  font-size: 15px;
  text-shadow: 1.5px 1.5px 0 #000, 
               -1.5px -1.5px 0 #000,  
               1.5px -1.5px 0 #000, 
               -1.5px 1.5px 0 #000;
  font-weight: bold;
  cursor: pointer;
  text-align: center;
  font-family: "DungGeunMo";
  line-height: 48px; /* 버튼 높이와 동일하게 설정하여 텍스트를 수직 중앙에 정렬 */
  display: flex;
  justify-content: center; /* 수평 중앙 정렬 */
  align-items: center; /* 수직 중앙 정렬 */

  @media (min-width: 600px) and (max-width: 900px) {
    font-size: 15px;
  }

  @media (min-width: 900px) {
    font-size: 20px;
  }
`;

function Home() {
  const navigate = useNavigate();

  return (
    <>
      <DashboardContainer>
        <Logo src={logo} alt="PokemonDex" />
        <StyledButton className="rpgui-button golden" onClick={() => navigate("/PokemonDex")}>
          포켓몬 도감 시작하기!
        </StyledButton>
      </DashboardContainer>
    </>
  );
}

export default Home;
