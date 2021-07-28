import React from "react";
import classnames from "classnames";

type Option = {
  value: string;
  label: string;
  disabled?: boolean;
};

interface IProps {
  id: string;
  label?: string;
  className?: string;
  selected: string;
  options: Array<Option>;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  disabled?: boolean;
}

const Select: React.FC<IProps> = ({
  id,
  label,
  onChange,
  options,
  className,
  selected,
  disabled
}) => {
  const context = "__select";
  const classNames = classnames(className, context, disabled && "disabled");

  return (
    <span className={classNames}>
      <label className="__label" htmlFor={id}>
        {label}
      </label>
      <select
        id={id}
        className={`${context}__dropdown`}
        value={selected}
        onChange={onChange}
        disabled={disabled}
      >
        {options &&
          options.map(option => (
            <option
              key={option.value}
              className="__option"
              value={option.value}
            >
              {option.label}
            </option>
          ))}
      </select>
    </span>
  );
};

export default Select;
