// Um componente que fica por volta de
// toda a aplicação e se repete em toda
// página
import '../styles/global.css'
import {ChallengesContext, ChallengesProvider} from '../contexts/ChallengesContext'
import { useState } from 'react'

// Todos os elementos dentro desse contexto tem acesso aos dados dele, no caso, toda a aplicação tem acesso ao challengescontext.
function MyApp({ Component, pageProps }) {
  
  return (
      <ChallengesProvider >
        <Component {...pageProps} />
      </ChallengesProvider>
  )
}

export default MyApp
