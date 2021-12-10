import "../styles/globals.css";
import { useState } from "react";
import { User } from "../typings";
import theme from "../styles/theme";
import { UserProvider } from "../components/user";
import { ChakraProvider } from "@chakra-ui/react";

function App({ Component, pageProps }) {
  const [user, setUser] = useState<User>(null);

  return (
    <ChakraProvider theme={theme}>
      <UserProvider value={{ user, setUser }}>
        <Component {...pageProps} />
      </UserProvider>
    </ChakraProvider>
  );
}

export default App;
