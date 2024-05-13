import styled from "styled-components";
import React from "react";
import { Unity, useUnityContext } from "react-unity-webgl";

export function Home() {
  const { unityProvider } = useUnityContext({
    loaderUrl: "/quizGame/build/desarolho_software.loader.js",
    dataUrl: "/quizGame/build/desarolho_software.data",
    frameworkUrl: "/quizGame/build/desarolho_software.framework.js",
    codeUrl: "/quizGame/build/desarolho_software.wasm",
  });

  return <Unity unityProvider={unityProvider} style =  {{ height: 560, width: 1000 }} />;
}
const Container =styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    height:100vh;
`

