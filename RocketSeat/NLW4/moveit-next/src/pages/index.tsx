// Essa é a HOME do site
import { CompletedChallenges } from "../components/CompletedChallenges";
import { Countdown } from "../components/Countdown";
import { ExperienceBar } from "../components/ExperienceBar";
import { Profile } from "../components/Profile";

import Head from 'next/head'
import { GetServerSideProps } from 'next';

import styles from '../styles/pages/Home.module.css';
import { ChallengeBox } from "../components/ChallengeBox";

import { CountdownProvider } from "../contexts/CountdownContext";
import { ChallengesProvider } from "../contexts/ChallengesContext";

interface homeProps {
  level: number;
  currentExperience: number;
  challengesCompleted: number;
}

// Lembrando que _app é o nível máximo, e index está abaixo de _app
export default function Home(props) {
  console.log(props);
  
  return (
    <ChallengesProvider
      level = {props.level}
      currentExperience = {props.currentExperience}
      challengesCompleted = {props.challengesCompleted}
    >
      <div className={styles.container}>
        <Head>
          <title>Início | Moveit</title>
        </Head>
        <ExperienceBar />
        <CountdownProvider>
          <section>
            <div>
              <Profile />
              <CompletedChallenges />
              <Countdown />
            </div>
            <div>
              <ChallengeBox />
            </div>
          </section>
        </CountdownProvider>
      </div>
    </ChallengesProvider>
  )
}

// Funcionalidade do NEXT
// Tudo o que fazemos de chamada externa(async) para algo externo como uma API
// não estará disponível para uma engine de busca como Google, que não vai aguardar a chamada ser feita
// Se fizermos essa chamada nesse método, ele vai fazer essa chamada antes de terminar de carregar a tela
// Foi essa função que fez o NEXT surgir. O next está rodando à base do NODE

// Declaramos o tipo da função (Ela é do tipo GetServerSideProps)
export const getServerSideProps: GetServerSideProps = async (ctx) => {

  const user = {
    level: 1,
    currentExperience: 50,
    challengesCompleted: 2,
  }

  const { level, currentExperience, challengesCompleted} = ctx.req.cookies;

  return {
    props: { 
      level: Number(level),
      currentExperience: Number(currentExperience),
      challengesCompleted: Number(challengesCompleted),
    }
  }
}