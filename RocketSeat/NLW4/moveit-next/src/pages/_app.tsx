// Um componente que fica por volta de
// toda a aplicação e se repete em toda
// página
import '../styles/global.css'

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
