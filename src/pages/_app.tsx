import API from "../api";
import "../styles/globals.css";
import { User } from "../typings";
import { NextSeo } from "next-seo";
import type { AppProps } from "next/app";
import Loading from "../components/load";
import { useEffect, useState } from "react";
import { UserProvider } from "../components/user";

function Host({ Component, pageProps }: AppProps) {
  const [status, setStatus] = useState("Getting current user data...");
  const [user, setUser] = useState<User | null | undefined>(undefined);

  useEffect(() => {
    function getSession() {
      API.getCurrentSession()
        .then((data: { user: User }) => {
          setTimeout(() => {
            setStatus("User data has successfully loaded!");
            setTimeout(() => {
              setUser(data.user);
            }, 1250);
          }, 1000);
        })
        .catch(() => {
          setTimeout(() => {
            setStatus("Unable to acquire user data!");
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
        title="Kythi."
        description="Kythi.com is an image hosting service."
        additionalMetaTags={[
          {
            property: "theme-color",
            content: "#5E81AC",
          },
        ]}
        openGraph={{
          title: "Kythi.",
          description: "Kythi.com is an image hosting service.",
        }}
      />
      <body className="bg-polar-100">
        {user === undefined ? (
          <Loading status={status} />
        ) : (
          <UserProvider value={{ user, setUser }}>
            <Component {...pageProps} />
          </UserProvider>
        )}
      </body>
    </>
  );
}

export default Host;
