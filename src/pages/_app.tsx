import API from '../api';
import '../styles/globals.css';
import {User} from '../typings';
import {NextSeo} from 'next-seo';
import theme from '../styles/theme';
import {AppProps} from 'next/app';
import Loading from '../components/load';
import {useEffect, useState} from 'react';
import {UserProvider} from '../components/user';
import {ChakraProvider} from '@chakra-ui/react';

function App({Component, pageProps}: AppProps) {
  const [user, setUser] = useState<User>(undefined);

  useEffect(() => {
    API.getSession()
        .then((data) => {
          setTimeout(() => {
            setUser(data.user);
          }, 1000);
        })
        .catch(() => {
          setTimeout(() => {
            setUser(null);
          }, 1000);
        });
  }, []);

  return (
    <>
      <NextSeo
        title="Kythi"
        description="Kythi is a new service currently being made."
        additionalMetaTags={[
          {
            property: 'theme-color',
            content: '#b00af7',
          },
        ]}
        openGraph={{
          title: '',
          description: 'Kythi.com is a new service currently being made.',
        }}
      />

      <ChakraProvider theme={theme}>
        {user === undefined ? (
          <Loading />
        ) : (
          <UserProvider value={{user, setUser}}>
            <Component {...pageProps} />
          </UserProvider>
        )}
      </ChakraProvider>
    </>
  );
}

export default App;
