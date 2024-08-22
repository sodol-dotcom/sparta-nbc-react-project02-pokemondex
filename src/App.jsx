// App.jsx -> 라우터 설정을 포함한 최상위 컴포넌트

import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from './components/Home'
import PokemonDetail from './components/PokemonDetail';
import PokemonDex from './components/PokemonDex'

function App() {
  return (
    <Router> {/* Router=BrowserRouter의 별칭. BrowserRouter로 Router를 감싼다. */}
      <nav>
        <ul>
          <li><Link to="/">Home</Link> </li>
          <li><Link to="/PokemonDex">PokemonDex</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* 포켓몬도감과 디테일페이지 추가 */}
        <Route path="/PokemonDex" element={<PokemonDex />} />
        <Route path="/PokemonDetail" element={<PokemonDetail />} />
      </Routes>
    </Router>
  );
}

export default App