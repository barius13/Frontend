import { FC, SVGProps } from "react";
import { IconType } from "react-icons";

interface FeatureProps {
  title: string;
  content: object | string;
  icon: IconType | SVGProps<SVGSVGElement>;
  isSvg?: boolean;
  svgData?: object | string;
}

const FeatureBox: FC<FeatureProps> = ({
  title,
  content,
  icon,
  isSvg,
  svgData,
}) => {
  return (
    <div className="p-6 bg-polar-100 hover:bg-polar-400 lg:duration-700 rounded-md w-full md:p-8 lg:py-7 md:shadow-lg md:hover:shadow-lg md:transition-all md:duration-500">
      <div className="flex items-baseline justify-between mb-2">
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
      <div className="mb-6 text-lg text-gray-200">{content}</div>
    </div>
  );
};

export default FeatureBox;
