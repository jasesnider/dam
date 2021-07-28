import React from "react";
import classnames from "classnames";
import InputNotification from "./InputNotification";

interface IProps {
  id: string;
  label: string;
  type: string;
  min?: number;
  max?: number;
  rows?: number;
  cols?: number;
  value?: any;
  icon?: any;
  name: string;
  invalidText?: string;
  className?: string;
  placeholder: string;
  onChange: (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => void;
  disabled?: boolean;
  readonly?: boolean;
  hideLabel?: boolean;
}

const Input: React.FC<IProps> = ({
  id,
  label,
  type,
  min,
  max,
  rows,
  cols,
  name,
  icon,
  value,
  readonly,
  invalidText,
  className,
  placeholder,
  onChange,
  disabled,
  hideLabel
}) => {
  const context = "__input";
  const classNames = classnames(
    className,
    disabled && "disabled",
    context,
    `${context}__${type}__field`,
    invalidText && "__invalid__text"
  );

  return (
    <span className={classNames}>
      <label className={hideLabel ? 'sr-only': ''} htmlFor={id}>{label}</label>
      {type === "textarea" ? (
        <textarea
          id={id}
          tabIndex={0}
          rows={rows || 4}
          cols={cols || 50}
          value={value}
          name={name}
          minLength={min}
          maxLength={max}
          placeholder={placeholder}
          onChange={onChange}
          readOnly={readonly}
          disabled={disabled}
          aria-invalid={!!invalidText}
        />
      ) : (
        <input
          id={id}
          type={type}
          tabIndex={0}
          value={value}
          name={name}
          minLength={min}
          maxLength={max}
          placeholder={placeholder}
          onChange={onChange}
          readOnly={readonly}
          disabled={disabled}
          aria-invalid={!!invalidText}
        />
      )}
      {invalidText && (
        <InputNotification
          className={`${context}__notification`}
          icon={icon}
          message={invalidText}
        />
      )}
    </span>
  );
};

export default Input;
