import { FC } from "react";
import { Switch } from "@headlessui/react";

interface Toggle {
  label: string;
  cname?: string;
  tooltip?: string;
  checked: boolean;
  onChange: (e: boolean) => void;
}

const Toggle: FC<Toggle> = ({
  label,
  checked,
  onChange,
  tooltip,
  cname = "",
}) => {
  return (
    <Switch.Group>
      <div className="flex group lg:flex-row md:flex-row flex-col">
        <Switch.Label className="mr-2 select-none">{label}</Switch.Label>
        <Switch
          checked={checked}
          onChange={onChange}
          className="relative bg-polar-400 inline-flex items-center h-6 rounded-full w-11"
        >
          <span
            className={`${
              checked
                ? "translate-x-6 bg-aurora-green"
                : "translate-x-1 bg-aurora-red-300"
            } inline-block w-4 h-4 transition ease-in-out duration-200 rounded-full`}
          />
        </Switch>
        <a
          className={`${cname} absolute hidden md:mt-8 mt-10 lg:mt-8 group-hover:flex transition ease-in-out z-10 max-w-md p-4 duration-300 text-sm text-snow-100 font-bold rounded bg-polar-300 shadow-2xl`}
        >
          {tooltip}
        </a>
      </div>
    </Switch.Group>
  );
};

export default Toggle;
