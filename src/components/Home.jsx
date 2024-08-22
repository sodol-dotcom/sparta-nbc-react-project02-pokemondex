// Home.jsx -> 홈 페이지를 위한 컴포넌트
import React from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>포켓몬 도감</h1>
      <button onClick={() => navigate('/PokemonDex')}>포켓몬 도감 시작하기</button>
    </div>
  );
}

export default Home;