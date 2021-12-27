import { useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
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
    <div className="flex justify-center items-center text-white">
      Hi {user.username}!
      <button onClick={() => router.push("/config")}>Press Me!</button>
    </div>
  ) : null;
}