import { useEffect } from "react";
import { useRouter } from "next/router";
import Nav from "../components/navbar";
import { useUser } from "../components/user";

export default function Dashboard() {
  const router = useRouter();
  const { user } = useUser();

  useEffect(() => {
    if (!user) {
      router.push("/");
    }
  }, [router, user]);

  return user ? (
    <>
      <Nav page="config" />
      <div className="flex justify-center items-center text-white">
        If you see this without a loading page it means that your user saved!
      </div>
    </>
  ) : null;
}
