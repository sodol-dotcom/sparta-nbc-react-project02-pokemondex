// App.jsx -> 라우터 설정을 포함한 최상위 컴포넌트

import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import styled from 'styled-components';
import Home from './components/Home';
import PokemonDetail from './components/PokemonDetail';
import PokemonDex from './components/PokemonDex'
import MOCK_DATA from './mock';

const nav = styled.nav`
  background-color: yellow;
`;

const List = styled.ul`
  background-color: blue;
  `;

const ListItem = styled.li`
  background-color: green;
`;

function App() {
  return (
    <Router> {/* Router=BrowserRouter의 별칭. BrowserRouter로 Router를 감싼다. */}
      <nav>
        <List>
          <ListItem><Link to="/">Home</Link> </ListItem>
          <ListItem><Link to="/PokemonDex">PokemonDex</Link></ListItem>
        </List>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* 포켓몬도감과 디테일페이지 추가 */}
        <Route path="/PokemonDex" element={<PokemonDex pokemonData={MOCK_DATA} />} />    {/* MOCK_DATA를 PokemonDex에 전달 */}
        {/* 포켓몬 디테일 페이지를 동적으로 변경할 수 있도록 경로 수정 */}
        <Route path="/PokemonDetail/:pokemonId" element={<PokemonDetail />} />
      </Routes>
    </Router>
  );
}

export default App;