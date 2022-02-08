import { FC } from "react";
import { KythiWhite } from "../../public/svgs";

interface LoadingProps {
  status: string;
}

const Loading: FC<LoadingProps> = ({ status }) => {
  return (
    <main className="bg-polar-100 h-screen">
      <div className="flex justify-center items-center h-90vh content-auto">
        <div className="grid grid-cols-1 gap-2">
          <div className="flex justify-center items-center content-auto">
            <KythiWhite />
          </div>

          <div className="text-white">{status}</div>
        </div>
      </div>
    </main>
  );
};

export default Loading;
