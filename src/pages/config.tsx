import { useEffect } from "react";
import Nav from "../components/navbar";
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
    <>
      <Nav page="config" />
      <div className="flex justify-center items-center text-white">
        <div className="discord-embed w-50 shadow-md border-l-discord-light_blue border-l-4 rounded-sm bg-discord-base m-10">
          <div className="embed pt-2 pr-4 pb-4 pl-3 font-discord-site">
            <div className="embed-site mt-2 antialiased font-light font-whitney text-site text-discord-site ">
              Site
            </div>
            <div className="embed-author mt-2 font-bold antialiased font-whitney text-author">
              Author
            </div>
            <div className="embed-title mt-2 font-semibold subpixel-antialiased font-whitney text-title">
              <a className="text-discord-blue cursor-pointer hover:underline">Brooklyn</a>
            </div>
            <div className="embed-desc mt-2 font-normal subpixel-antialiased font-whitney text-desc text-gray-300 max-w-sm">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta, fugiat.
            </div>
            <div className="image h-img mt-4">
              <img className="h-img rounded-sm" src="https://www.slashgear.com/wp-content/uploads/2021/05/Discord_IAP_KeyVisuals_Header_02-1-1280x720.jpg" alt="" />
            </div>

          </div>
        </div>
      </div>
    </>
  ) : null;
}
