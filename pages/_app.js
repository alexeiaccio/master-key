import { DefaultSeo } from 'next-seo'

import './index.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <DefaultSeo
        openGraph={{
          type: 'website',
          locale: 'en_US',
          url: 'https://masterkey.garden/',
          site_name: 'Master Key',
          images: [
            {
              url: 'https://masterkey.garden/og-mage.png',
              width: 1200,
              height: 630,
              alt: 'Master Key',
            },
          ],
        }}
        languageAlternates={[
          {
            hrefLang: 'ru-RU',
            href: 'https://masterkey.garden/rus',
          },
          {
            hrefLang: 'en_US',
            href: 'https://masterkey.garden/eng',
          },
        ]}
      />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
