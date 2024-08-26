import React, { useRef, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import styled, { createGlobalStyle, keyframes } from "styled-components";
import Home from "./components/Home";
import PokemonDetail from "./components/PokemonDetail";
import PokemonDex from "./components/PokemonDex";
import MyButtonComponent from "./components/MyButtonComponent";
import MOCK_DATA from "./mock";
import MusicPlayer from "./components/MusicPlayer"; // 플레이어 컴포넌트 임포트

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'DungGeunMo';
    src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_six@1.2/DungGeunMo.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}
`;

const Nav = styled.nav`
  background-color: #007bff;
  padding: 10px;
  width: 100vw;
`;

const List = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: center;
`;

const ListItem = styled.li`
  display: inline;
  margin-right: 30px;
  a {
    color: white;
    text-decoration: none;
    font-size: 1.2em;
    font-family: "DungGeunMo";
  }
`;

const buttonStyles = `
  background-color: #007bff;
  color: white;
  border: none;
  font-family: 'DungGeunMo';
  font-size: 1.2em;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  transition: color 0.3s; /* 부드러운 색상 변경 효과 */
`;

const PlayButton = styled.button`
  ${buttonStyles}
  margin-right: 30px;
  color: ${({ $isActive }) => ($isActive ? "yellow" : "white")}; /* 상태에 따라 글자색 변경 */
`;

// 깜빡이는 애니메이션 정의
const blinkAnimation = keyframes`
  0% { opacity: 1; }
  50% { opacity: 0; }
  100% { opacity: 1; }
`;

const FloatingMessage = styled.div`
  position: fixed;
  bottom: 70px;
  left: 50%;
  transform: translateX(-50%);
  font-family: 'DungGeunMo';
  color: #000000;
  padding: 7px 25px; /* 텍스트 패딩 */
  border-radius: 10px;
  font-size: 1.3em;
  display: ${({ $isVisible }) => ($isVisible ? 'block' : 'none')};
  animation: ${blinkAnimation} 1.5s infinite;
  background-color: rgba(255, 238, 0, 0.832); /* 배경 색상과 투명도 */
`;

// 푸터 스타일 컴포넌트 추가
const Footer = styled.footer`
  background-color: #333;
  color: white;
  text-align: center;
  padding: 10px 0;
  position: fixed;
  bottom: 0;
  width: 100%;
  font-family: "DungGeunMo";
  font-size: 1em;
  `;

function App() {
  const [isActive, setIsActive] = useState(false); // 버튼의 활성화 상태 관리
  const [isPlaying, setIsPlaying] = useState(false); // 음악 재생 상태 관리
  const [showMessage, setShowMessage] = useState(true); // 메시지 표시 상태 관리
  const audioRef = useRef(null);

  const handlePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying((prevState) => !prevState); // 음악 재생 상태 토글
    }
    setIsActive((prevState) => !prevState); // 버튼 색상 및 텍스트 토글
    setShowMessage(false); // 버튼 클릭 후 메시지 숨김
  };

  return (
    <Router>
      <GlobalStyle />
      <Nav>
        <List>
          <ListItem>
            <Link to="/">Home</Link>
          </ListItem>
          <ListItem>
            <Link to="/PokemonDex">PokemonDex</Link>
          </ListItem>
          <PlayButton $isActive={isActive} onClick={handlePlay}>
            {isPlaying ? "Pause Music" : "Play Music"}
          </PlayButton>
        </List>
      </Nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/PokemonDex"
          element={<PokemonDex pokemonData={MOCK_DATA} />}
        />
        <Route path="/PokemonDetail/:pokemonId" element={<PokemonDetail />} />
      </Routes>
      <MusicPlayer ref={audioRef} />
      <FloatingMessage $isVisible={showMessage}>
        Please click the button at the top to play music!
      </FloatingMessage>
      <Footer>
        &copy; Created by Sodol | Sparta Coding Club Frontend Bootcamp
      </Footer>
    </Router>
  );
}

export default App;
