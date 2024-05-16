import styled from "styled-components";
import React from "react";
import { Unity, useUnityContext } from "react-unity-webgl";

const CenteredContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; // This will make the container take up the full viewport height
  with: 100vw; // This will make the container take up the full viewport width
`;

export function Home() {
  const { unityProvider } = useUnityContext({
    loaderUrl: "/quizGame/build/LearningLimboV2.loader.js",
    dataUrl: "/quizGame/build/LearningLimboV2.data",
    frameworkUrl: "/quizGame/build/LearningLimboV2.framework.js",
    codeUrl: "/quizGame/build/LearningLimboV2.wasm",
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
