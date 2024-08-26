// src/components/MyButtonComponent.jsx
import React, { useEffect } from 'react';

const MyButtonComponent = () => {
  useEffect(() => {
    // RPGUI 초기화 (필요한 경우)
    if (window.rpgui) {
      window.rpgui.init();
    }
  }, []);

  return (
    <div>
      <button className="rpgui-button" onClick={() => alert("RPGUI Button Clicked!")}>
        RPGUI Button
      </button>
    </div>
  );
};

export default MyButtonComponent;