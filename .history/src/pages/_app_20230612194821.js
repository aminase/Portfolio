import Theme from '../styles/theme'

export default function App({ Component, pageProps }) {
  return (
    <>
      <link rel='icon' href='/log0.png' sizes='32x32' />
      <title>Portfolio | Amina Selimovic</title>
      <Theme>
        <Component {...pageProps} />
      </Theme>
    </>
  )
}