import Link from "next/link";
import { useUser } from "../components/user";
import Footer from "../components/footer";

export default function Page404() {
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

            <Link href={user ? "/dashboard" : "/"} passHref>
              <button className="btn normal-case border-0 btn-sm w-36 h-10 bg-frost-400 hover:bg-frost-300 shadow-lg mt-3">
                {user ? "Dashboard" : "Home"}
              </button>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
