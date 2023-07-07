import Theme from '../styles/theme'
import Head from 'next/head'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Portfolio | Amina</title>
        <link rel='shortcut icon' type='image/x-icon' sizes='16x16' href='favicon.ico?' />
        <meta charSet='utf-8' />
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <link rel='icon' type='image/png' href='/favicon.png' />
        <link
          href='https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap'
          rel='stylesheet'
        />
        <meta charSet='utf-8' />
        <meta content="software developer's portfolio" name='description'></meta>
        <meta content='summary_large_image' name='twitter:card'></meta>
        <meta property='og:title' content='Portfolio: Everything You Need to Know' />
        <meta property='og:url' content='https://aminase.github.io/portfolio/' />
        <meta property='og:type' content='website' />
        <meta property='og:image' content='https://aminase.github.io/portfolio/favicon.ico'></meta>

        {/*<!-- Google / Search Engine Tags -->*/}
        <meta itemprop='name' content='Amina | Portfolio' />
        <meta
          itemprop='description'
          content="Software developers and bioinformaticians's porftolio"
        />
        <meta itemprop='image' content='https://aminase.github.io/portfolio/favicon.ico' />

        {/*<!-- Facebook Meta Tags -->*/}
        <meta property='og:title' content='Amina | Portfolio' />
        <meta
          property='og:description'
          content="Software developers and bioinformaticians's porftolio"
        />
        <meta property='og:image' content='https://aminase.github.io/portfolio/favicon.ico' />
        <meta property='og:url' content='https://aminase.github.io/portfolio/' />
        <meta property='og:type' content='website' />

        {/*<!-- Twitter Meta Tags -->*/}
        <meta name='twitter:title' content='Amina | Portfolio' />
        <meta
          name='twitter:description'
          ccontent="Software developers and bioinformaticians's porftolio"
        />
        <meta name='twitter:image' content='https://aminase.github.io/portfolio/favicon.ico' />
        <meta name='twitter:card' content='summary_large_image' />
        <meta property='og:locale' content='en_GB' />
        <meta property='og:image:alt' content='About Amina' />
      </Head>
      <Theme>
        <Component {...pageProps} />
      </Theme>
    </>
  )
}
