// App.jsx -> 라우터 설정을 포함한 최상위 컴포넌트

import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from './components/Home'
import Pokedex from './components/Pokedex'

const App = () => {
  return (
    <Router> {/* Router=BrowserRouter의 별칭. BrowserRouter로 Router를 감싼다. */}
      <nav>
        <ul>
          <li><Link to="/">Home</Link> </li>
          <li><Link to="/Pokedex">Pokedex</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Pokedex" element={<Pokedex />} />
      </Routes>
    </Router>
  );
}

export default App