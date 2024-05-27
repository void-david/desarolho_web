'use client';
import styles from '@/styles/game.module.css'

import React from 'react'
import { Unity, useUnityContext } from "react-unity-webgl";

function game() {
    const { unityProvider } = useUnityContext({
        loaderUrl: "/quizGame/build/LearningLimboV2.loader.js",
        dataUrl: "/quizGame/build/LearningLimboV2.data",
        frameworkUrl: "/quizGame/build/LearningLimboV2.framework.js",
        codeUrl: "/quizGame/build/LearningLimboV2.wasm",
      });
    

      return(
        <> 
        <div className={styles.container}>
            <Unity
            unityProvider={unityProvider}
            // cambiar en el export de unity
            style={{ height: 1000, width: 'auto' }}
        />   
        </div>

        </>
      )
      

}

export default game
