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
    loaderUrl: "/quizGame/build/UnityProjects.loader.js",
    dataUrl: "/quizGame/build/UnityProjects.data",
    frameworkUrl: "/quizGame/build/UnityProjects.framework.js",
    codeUrl: "/quizGame/build/UnityProjects.wasm",
  });

  return (
    <CenteredContainer>
      <Unity
        unityProvider={unityProvider}
        style={{ height: 1100, width: 1600 }}
      />
    </CenteredContainer>
  );
}
