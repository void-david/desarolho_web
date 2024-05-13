import styled from "styled-components";
import React from "react";
import { Unity, useUnityContext } from "react-unity-webgl";

const CenteredContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; // This will make the container take up the full viewport height
`;

export function Home() {
  const { unityProvider } = useUnityContext({
    loaderUrl: "/quizGame/build/desarolho_software.loader.js",
    dataUrl: "/quizGame/build/desarolho_software.data",
    frameworkUrl: "/quizGame/build/desarolho_software.framework.js",
    codeUrl: "/quizGame/build/desarolho_software.wasm",
  });

  return (
    <CenteredContainer>
      <Unity unityProvider={unityProvider} style={{ height: 900, width: 1600 }} />
    </CenteredContainer>
  );
}