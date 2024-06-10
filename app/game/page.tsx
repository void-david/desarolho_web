'use client';
import Gamelink from "../components/gamelink";
import styles from '@/styles/game.module.css';
import { useUser } from "@clerk/nextjs";



function Game() {
  const { user } = useUser();
  const isAdmin = user?.publicMetadata?.isAdmin === true;
  //console.log(user);

  return (
    <>
    <div className={styles.container}>
      <Gamelink />
    </div>

    </>
  );

}

export default Game;
