import { useEffect } from "react";
import { useRouter } from "next/router";
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
      If you see this without a loading page it means that your user saved!
    </div>
  ) : null;
}