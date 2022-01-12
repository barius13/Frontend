import API from "../api";
import "../styles/globals.css";
import { NextSeo } from "next-seo";
import type { AppProps } from "next/app";
import Loading from "../components/load";
import { useEffect, useState } from "react";
import { UserProvider } from "../components/user";

function Host({ Component, pageProps }: AppProps) {
  const [status, setStatus] = useState("Getting Current User Data...");
  const [user, setUser] = useState<User | null | undefined>(undefined);

  useEffect(() => {
    function getSession() {
      API.getCurrentSession()
        .then((data: { user: User }) => {
          setTimeout(() => {
            setStatus("User Data Loaded!");
            setTimeout(() => {
              setUser(data.user);
            }, 1250);
          }, 1000);
        })
        .catch(() => {
          setTimeout(() => {
            setStatus("Unable To Acquire User Data!");
            setTimeout(() => {
              setUser(null);
            }, 1250);
          }, 1000);
        });
    }

    if (!user) getSession();
  }, [user]);

  return (
    <>
      <NextSeo
        title="Kythi File Host"
        description="Kythi File Host is a new service currently being made."
        additionalMetaTags={[
          {
            property: "theme-color",
            content: "#5E81AC",
          },
        ]}
        openGraph={{
          title: "Hosting",
          description: "Kythi File Host is a new service currently being made.",
        }}
      />

      {user === undefined ? (
        <Loading status={status} />
      ) : (
        <UserProvider value={{ user, setUser }}>
          <Component {...pageProps} />
        </UserProvider>
      )}
    </>
  );
}

export default Host;
