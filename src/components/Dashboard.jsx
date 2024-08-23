// Dashboard.jsx -> 선택된 포켓몬 보여주는 컴포넌트

import React from "react";
import styled from "styled-components";

const DashboardContainer = styled.div`
  color: yellow;
`;

const Dashboard = ({ selectedPokemon, onRemove }) => {
  console.log("Selected Pokemon IDs:", selectedPokemon.map(pokemon => pokemon.id));

  return (
    <DashboardContainer>
      {/* 선택된 포켓몬 정보 표시하는 내용 추가 */}
      <h2>선택된 포켓몬</h2>
      {selectedPokemon.length === 0 ? (
        <p>선택된 포켓몬이 없습니다.</p>
      ) : (
        <ul>
          {selectedPokemon.map((pokemon) => (
            <li key={pokemon.id}>
              <div>
                <img src={pokemon.img_url} alt={pokemon.korean_name} />
                <h3>{pokemon.korean_name}</h3>
                <button onClick={() => onRemove(pokemon)}>삭제</button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </DashboardContainer>
  );
};

export default Dashboard;
