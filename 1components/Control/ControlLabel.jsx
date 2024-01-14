// <ControlLabel></ControlLabel>
"use client";
import clsx from "clsx";
import { useContext } from "react";
import { ControlContext } from "./Control";
import "./ControlLabel.css";

export default function ControlLabel(props) {
  const dataFromControl = useContext(ControlContext);
  const labelId = props.id ?? dataFromControl?.labelId;
  const required = dataFromControl?.required;
  const inputId = dataFromControl?.inputId;
  const { className, children, style, srOnly } = props;

  return (
    <label id={labelId} htmlFor={inputId} className={clsx("controlLabel", className, srOnly && "srOnly")} style={style}>
      {children}
      {required ? <span className="controlLabel__asteriks">*</span> : ""}
    </label>
  )
}
