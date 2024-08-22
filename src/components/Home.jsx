// Home.jsx -> 홈 페이지를 위한 컴포넌트
import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

// 스타일 정의
const DashboardContainer = styled.div``;

function Home() {
  const navigate = useNavigate();

  return (
    <DashboardContainer>
      <h1>포켓몬 도감</h1>
      <button onClick={() => navigate("/PokemonDex")}>
        포켓몬 도감 시작하기
      </button>
    </DashboardContainer>
  );
}

export default Home;
