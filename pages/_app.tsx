import '../styles/globals.css';
import {NextSeo} from 'next-seo';
import type {AppProps} from 'next/app';

function Bios({Component, pageProps}: AppProps) {
  return (
    <>
      <NextSeo
        title='Kythi File Host'
        description='Kythi File Host is a new service currently being made.'
        additionalMetaTags={[
          {
            property: 'theme-color',
            content: '#5E81AC',
          },
        ]}
        openGraph={{
          title: 'Hosting',
          description: 'Kythi. File Host is a new service currently being made.',
        }}
      />
        <Component {...pageProps} />
    </>
  );
}

export default Bios;