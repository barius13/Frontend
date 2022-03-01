import API from "../api";
import "../styles/globals.css";
import { User, File } from "../typings";
import { NextSeo } from "next-seo";
import type { AppProps } from "next/app";
import Loading from "../components/load";
import { useEffect, useState } from "react";
import { UserProvider } from "../components/user";

function Host({ Component, pageProps }: AppProps) {
  const [status, setStatus] = useState("Trying to fetch data...");
  const [user, setUser] = useState<User | null | undefined>(undefined);

  useEffect(() => {
    function getSession() {
      API.getCurrentSession()
        .then((data: { user: User }) => {
          setTimeout(() => {
            setStatus("User data fetched successfully! Logging in...");
            setTimeout(() => {
              setUser(
                Object.assign(data.user, {
                  uploads: data.user.uploads.sort(
                    (a: File, b: File) =>
                      new Date(b.uploadedAt).getTime() -
                      new Date(a.uploadedAt).getTime()
                  ),
                })
              );
            }, 1250);
          }, 1000);
        })
        .catch(() => {
          setTimeout(() => {
            setStatus("Unable to fetch user data!");
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
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;500;600;700;900&display=swap"
          rel="stylesheet"
        />
      </head>
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
      {user === undefined ? (
        <Loading status={status} />
      ) : (
        <div className="select-none">
          <UserProvider value={{ user, setUser }}>
            <Component {...pageProps} />
          </UserProvider>
        </div>
      )}
    </>
  );
}

export default Host;
