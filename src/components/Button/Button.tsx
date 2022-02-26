import React from "react";
import classNames from "classnames";

import { ButtonProps } from "./Button.types";

export default function Button(props: ButtonProps) {
  const { value, onClick, size, primary, className } = props;

  const _className = classNames("btn", {
    className,
    "btn--primary": primary,
    [`btn--${size}`]: size,
  });

  return (
    <button type="button" className={_className} onClick={(e) => onClick(e)}>
      {value}
    </button>
  );
}
