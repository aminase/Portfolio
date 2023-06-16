import Theme from '../styles/theme'
import Head from 'next/document'

export default function App({ Component, pageProps }) {
  return (
    <>
      <head>
        <link rel='apple-touch-icon' sizes='180x180' href='/images/apple-touch-icon.png' />
        <link rel='icon' type='image/png' sizes='32x32' href='/images/favicon-32x32.png' />
        <link rel='icon' type='image/png' sizes='16x16' href='../images/favicon-16x16.png' />
        <link rel='icon' href='/favicon.ico' />
        <title>Portfolio | Amina</title>
      </head>
      <Theme>
        <Component {...pageProps} />
      </Theme>
    </>
  )
}
