'use client';
import styles from '@/styles/game.module.css'

import React from 'react'
import { Unity, useUnityContext } from "react-unity-webgl";

function LB() {
    const { unityProvider } = useUnityContext({
        loaderUrl: "/quizGame/build/LearningLimboV8.loader.js",
        dataUrl: "/quizGame/build/LearningLimboV8.data",
        frameworkUrl: "/quizGame/build/LearningLimboV8.framework.js",
        codeUrl: "/quizGame/build/LearningLimboV8.wasm",
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

export default LB