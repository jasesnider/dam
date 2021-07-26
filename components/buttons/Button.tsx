import React from "react";
import classnames from "classnames";

interface IProps {
  id: string;
  title: string;
  label: string;
  type: string | Object;
  className?: string;
  name: string;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  isMiny?: boolean;
}

const Button: React.FC<IProps> = ({
  id,
  label,
  name,
  title,
  onClick,
  type,
  className,
  isMiny,
  disabled
}) => {
  const context = "__button";
  const classNames = classnames(
    className,
    isMiny && `${context}__miny`,
    disabled && "disabled",
    `${context}__${type}`
  );

  return (
    <button
      tabIndex={0}
      className={classNames}
      id={id}
      name={name}
      title={title}
      onClick={onClick}
      disabled={disabled}
    >
      <span className="__label">{label}</span>
    </button>
  );
};

export default Button;
