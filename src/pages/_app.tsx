import API from "../api";
import "../styles/globals.css";
import { User } from "../typings";
import theme from "../styles/theme";
import Loading from "../components/load";
import { useEffect, useState } from "react";
import { UserProvider } from "../components/user";
import { ChakraProvider } from "@chakra-ui/react";

function App({ Component, pageProps }) {
  const [user, setUser] = useState<User>(undefined);

  useEffect(() => {
    API.getSession()
      .then((data) => {
        setUser(data.user);
      })
      .catch(() => {
        setTimeout(() => {
          setUser(null);
        }, 1000)
      });
  }, []);

  return user === undefined ? (
    <Loading></Loading>
  ) : (
    <ChakraProvider theme={theme}>
      <UserProvider value={{ user, setUser }}>
        <Component {...pageProps} />
      </UserProvider>
    </ChakraProvider>
  );
}

export default App;
