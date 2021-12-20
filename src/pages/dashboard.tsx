import { useEffect } from "react";
import Nav from "../components/navbar";
import "focus-visible/dist/focus-visible";
import { useUser } from "../components/user";
import { useRouter } from "next/dist/client/router";



export default function Dashboard() {
  const router = useRouter();
  const { user } = useUser();
  
  useEffect(() => {
    if (!user) {
      router.push("/");
    }
  }, []);

  return user ? (
    <>
      <Nav page={"dash"} />
    </>
  ) : null;
}