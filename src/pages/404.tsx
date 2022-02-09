import { useRouter } from "next/router";
import Button from "../components/button";
import Footer from "../components/footer";
import { useUser } from "../components/user";

export default function Page404() {
  const router = useRouter();
  const { user } = useUser();

  return (
    <>
      <div className="bg-polar-200">
        <div className="flex justify-center items-center h-screen grid-rows-1	text-white">
          <div className="text-center">
            <h1 className="lg:text-5xl md:text-5xl text-4xl font-bold text-snow-200">
              404 • Unavailable
            </h1>
            <p className="text-xl text-snow-100 px-4">
              The page you are looking for is unavailble or does not exist.
            </p>

            <Button
              size="lg"
              variant="info"
              cname="mt-4"
              onClick={() => router.push(user ? "/dashboard" : "/")}
            >
              {user ? "Dashboard" : "Home"}
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
