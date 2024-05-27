'use client';
import styled from "styled-components";
import React from "react";
import { Unity, useUnityContext } from "react-unity-webgl";

const CenteredContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; // This will make the container take up the full viewport height
  width: 100vw; // This will make the container take up the full viewport width
`;

 const Game = ()=> {
  const { unityProvider } = useUnityContext({
    loaderUrl: "/public/quizGame/Build/LearningLimboV2.loader.js",
    dataUrl: "/public/quizGame/Build/LearningLimboV2.data",
    frameworkUrl: "/public/quizGame/Build/LearningLimboV2.framework.js",
    codeUrl: "/public/quizGame/Build/LearningLimboV2.wasm",
  });

  return (
    <CenteredContainer>
      <Unity
        unityProvider={unityProvider}
        style={{ height: 675, width: 1200 }}
      />
    </CenteredContainer>
  );
}
export default Game;