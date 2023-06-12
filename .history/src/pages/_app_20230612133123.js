import Theme from '../styles/theme'
import fav from '../../public/'

export default function App({ Component, pageProps }) {
  return (
    <>
      <link rel='icon' href='../../public/favicon.ico' />

      <title>Portfolio | Amina Selimovic</title>
      <Theme>
        <Component {...pageProps} />
      </Theme>
    </>
  )
}