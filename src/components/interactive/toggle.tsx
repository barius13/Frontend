import {FC} from 'react';
import {Switch} from '@headlessui/react';

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
  cname = '',
}) => {
  return (
    <Switch.Group>
      <div className="group flex flex-col md:flex-row lg:flex-row">
        <Switch.Label className="mr-2 select-none">{label}</Switch.Label>
        <Switch
          checked={checked}
          onChange={onChange}
          className="relative inline-flex h-6 w-11 items-center rounded-full bg-polar-400"
        >
          <span
            className={`${
              checked
                ? 'translate-x-6 bg-aurora-green'
                : 'translate-x-1 bg-aurora-red-300'
            } inline-block h-4 w-4 rounded-full transition duration-200 ease-in-out`}
          />
        </Switch>
        <a
          className={`${cname} absolute z-10 mt-10 hidden max-w-md rounded bg-polar-300 p-4 text-sm font-bold text-snow-100 shadow-2xl transition duration-300 ease-in-out group-hover:flex md:mt-8 lg:mt-8`}
        >
          {tooltip}
        </a>
      </div>
    </Switch.Group>
  );
};

export default Toggle;
