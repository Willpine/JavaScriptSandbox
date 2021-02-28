// Um componente que fica por volta de
// toda a aplicação e se repete em toda
// página
import '../styles/global.css'

// Todos os elementos dentro desse contexto tem acesso aos dados dele, no caso, toda a aplicação tem acesso ao challengescontext.
function MyApp({ Component, pageProps }) {
  return (  
    <Component {...pageProps} />
  )
}

export default MyApp
