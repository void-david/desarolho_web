import styled from "styled-components";
import { Unity, useUnityContext } from "react-unity-webgl";
import React, { Fragment } from "react";

export function Home() {

const unityProvider =
  useUnityContext({
    loaderUrl: "build/myunityapp.loader.js",
    dataUrl: "build/myunityapp.data",
    frameworkUrl: "build/myunityapp.framework.js",
    codeUrl: "build/myunityapp.wasm",
  });

  return (<Container>
    <Fragment>
      <Unity unityProvider={unityProvider} style={{ height: 560, width: 1000 }} />

    </Fragment>
  </Container>);
}
const Container =styled.div`
  height:100vh;
`