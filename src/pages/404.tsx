import { useRouter } from "next/router";
import { useUser } from "../components/user";
import Footer from "../components/footer";

export default function Page404() {
  const { user } = useUser();
  const router = useRouter();
  return (
    <>
      <div className="bg-polar-200">
        <div className="flex justify-center items-center h-screen grid-rows-1	text-white">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-snow-200">
              404 • Unavailable
            </h1>
            <p className="text-xl text-snow-100">
              The page you are looking for does not exist.
            </p>

            <button
              onClick={() => {
                user ? router.push("/dashboard") : router.push("/");
              }}
              className="py-2 w-40 font-semibold text-white rounded-md bg-aurora-red-200 hover:bg-aurora-red-100 shadow-lg mt-3"
            >
              Home
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
