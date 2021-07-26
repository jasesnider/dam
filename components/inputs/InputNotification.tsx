import React from "react";
import classnames from "classnames";

interface IProps {
  message: string;
  icon?: any;
  className?: string;
}

const InputNotification: React.FC<IProps> = ({ message, icon, className }) => {
  const classNames = classnames(className);

  return (
    <div className={classNames}>
      <span>{message}</span>
      <span>{icon}</span>
    </div>
  );
};

export default InputNotification;
