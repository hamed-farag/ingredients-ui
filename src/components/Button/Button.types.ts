import { MouseEventHandler } from "react";

export interface ButtonProps {
  value: String;
  onClick: MouseEventHandler<HTMLButtonElement>;
  size: "normal" | "small" | "large";
  primary: Boolean;
  className?: String;
}
