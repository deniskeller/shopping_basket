import React from "react";
import classNames from "classnames";

type ButtonProps = {
  className?: string;
  outline?: boolean;
  children?: React.ReactNode;
  onClick?: (e: React.SyntheticEvent) => void;
};

const Button: React.FC<ButtonProps> = (props) => {
  return (
    <button
      data-testid="btn-add"
      onClick={props.onClick}
      className={classNames("button", props.className, {
        "button--outline": props.outline,
      })}
    >
      {props.children}
    </button>
  );
};

export default Button;
