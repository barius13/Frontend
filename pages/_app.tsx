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
            content: '#b00af7',
          },
        ]}
        openGraph={{
          title: 'Hosting',
          description: 'Kythi File host is a new service currently being made.',
        }}
      />
      <body className='bg-polar-200'>
        <Component {...pageProps} />
      </body>
    </>
  );
}

export default Bios;