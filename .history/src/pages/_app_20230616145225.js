import Theme from '../styles/theme'

export default function App({ Component, pageProps }) {
  return (
    <>
      <link rel='apple-touch-icon' sizes='180x180' href='/images/apple-touch-icon.png' />
      <link rel='icon' type='image/png' sizes='32x32' href='/images/favicon-32x32.png' />
      <link rel='icon' type='image/png' sizes='16x16' href='../images/favicon-16x16.png' />
      <link rel='icon' type='image/png' href='favicon.ico' />
      <link rel='manifest' href='/site.webmanifest' />
      <title>Portfolio | Amina</title>
      <Theme>
        <Component {...pageProps} />
      </Theme>
    </>
  )
}
