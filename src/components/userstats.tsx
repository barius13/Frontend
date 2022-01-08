import { FC, SVGProps } from "react";
import { IconType } from "react-icons";

interface Stats {
  title: string;
  content: object | string;
  icon: IconType | SVGProps<SVGSVGElement>;
  isSvg?: boolean;
  svgData?: object | string;
}

const Stats: FC<Stats> = ({ title, content, icon, isSvg, svgData }) => {
  return (
    <div className="p-6 bg-polar-200 hover:bg-polar-400 lg:duration-700 border-none rounded-md md:p-8 lg:py-4 md:shadow-lg md:hover:shadow-lg md:transition-all md:duration-500 ">
      <div className="flex items-baseline justify-between mb-4">
        <h4 className="text-xl font-bold lg:text-2xl">{title}</h4>
        {isSvg ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="#BF616A"
            {...svgData}
          >
            {icon}
          </svg>
        ) : (
          icon
        )}
      </div>
      <p className="mb-6 text-lg text-gray-200">{content}</p>
    </div>
  );
};

export default Stats;
