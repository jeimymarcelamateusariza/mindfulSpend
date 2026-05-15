import { ChevronDown } from "lucide-react";

type Option = {
  value: string;
  label: string;
};

type SelectorProps = {
  options: Option[];
  value: string;
  onChange: (value: string) => void;
};

export const ComboboxCustom = ({ options, value, onChange }: SelectorProps) => {
  return (
    <div className="relative">
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full appearance-none bg-surface-container-low border-none rounded-xl pl-4 pr-10 py-3 focus:ring-2 focus:ring-primary-container focus:bg-surface-container-lowest transition-all text-on-surface outline-none"
      >
        <option value="">Selecciona una categoría</option>

        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>

      <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-outline w-5 h-5" />
    </div>
  );
};
