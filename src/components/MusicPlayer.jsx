import React, { forwardRef } from 'react';
import styled from 'styled-components';

// 스타일 컴포넌트 정의
const PlayerContainer = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const AudioElement = styled.audio`
  /* 숨기기 */
  position: absolute;
  width: 0;
  height: 0;
  opacity: 0;
  pointer-events: none; /* 클릭 이벤트를 무시하도록 설정 */
`;

const MusicPlayer = forwardRef((props, ref) => (
  <PlayerContainer>
    <AudioElement ref={ref} controls {...props}>
      <source src="/src/assets/music.mp3" type="audio/mpeg" />
      {/* 'fallback' text */}
      Your browser does not support the audio element.
    </AudioElement>
  </PlayerContainer>
));

export default MusicPlayer;
