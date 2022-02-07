import { FC } from "react";
import { Switch } from "@headlessui/react";

interface Toggle {
  label: string;
  checked: boolean;
  onChange: (e: boolean) => void;
}

const Toggle: FC<Toggle> = ({ label, checked, onChange }) => {
  return (
    <Switch.Group>
      <Switch.Label className="mr-4">{label}</Switch.Label>
      <Switch
        checked={checked}
        onChange={onChange}
        className={`relative bg-polar-400 inline-flex items-center h-6 rounded-full w-11`}
      >
        <span
          className={`${
            checked
              ? "translate-x-6 bg-aurora-green"
              : "translate-x-1 bg-aurora-red-300"
          } inline-block w-4 h-4 transform  transition ease-in-out duration-200 rounded-full`}
        />
      </Switch>
    </Switch.Group>
  );
};

export default Toggle;
