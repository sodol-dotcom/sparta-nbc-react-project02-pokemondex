// Dashboard.jsx -> 선택된 포켓몬 보여주는 컴포넌트

import React from 'react'

const DashboardContainer = styled.div`

`;

function Dashboard = ({ selectedPokemon, onRemove }) => {
  return (
    <DashboardContainer>
      <h2>선택된 포켓몬</h2>
      {selectedPokemon.length === 0 ? (
        <p>선택된 포켓몬이 없습니다.</p>
      ) : (
        <ul>
          {selectedPokemon.map(pokemon => (
            <li key={Pokemon.id}>{pokemon.korean_name}</li>
          ))}
        </ul>
      )}
      {selectedPokemon.map((pokemon) => (
        <div key={pokemon.id}>
          <img src={pokemon.image} alt={pokemon.korean_name} />
          <h3>{pokemon.korean_name}</h3>
          <button onClick={() => onRemove(pokemon)}>삭제</button>
        </div>
      ))}
    </DashboardContainer>
  );
};

export default Dashboard;