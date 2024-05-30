'use client';
import styles from '@/styles/game.module.css'

import React from 'react'
import { Unity, useUnityContext } from "react-unity-webgl";

function Game() {
    const { unityProvider } = useUnityContext({
        loaderUrl: "/LearningLimboV3/build/LearningLimboV3.loader.js",
        dataUrl: "/LearningLimboV3/build/LearningLimboV3.data",
        frameworkUrl: "/LearningLimboV3/build/LearningLimboV3.framework.js",
        codeUrl: "/LearningLimboV3/build/LearningLimboV3.wasm",
      });
    

      return(
        <> 
        <div className={styles.container}>
            <Unity
            unityProvider={unityProvider}
            // cambiar en el export de unity
            style={{ height: 760, width: 'auto' }}
        />   
        </div>

        </>
      )
      

}

export default Game;
