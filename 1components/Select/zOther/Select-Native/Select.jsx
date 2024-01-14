// <Select name="" value="" onChange={(e)=>e} />
"use client";
import { useContext, useState } from "react";
import { ControlContext } from "@/app/_components/Control";
import "./Select.css";

export default function Select(props) {
  const dataFromControl = useContext(ControlContext);
  const [ touched, setTouched ] = useState(false);

  const id = props.id ?? dataFromControl?.inputId ?? null;
  const name = props.name ?? "";
  const value = props.value ?? "";
  const { onChange=e=>e, onFirstTouch=e=>e } = props;
  const { required, children, placeholder, isLoading, style,disabled } = props;

  const handleClick = (e) => {
    if (e.type === "keydown" && e.key !== "Enter") return;
    !touched && onFirstTouch(e);
    !touched && setTouched(true)
  }

  return (
    <select
      id={id}
      className="select"
      name={name}
      value={value}
      onChange={onChange}
      required={required}
      onClick={handleClick}
      onKeyDown={handleClick}
      style={style}
      disabled={disabled}
    >
      {placeholder ? <option value="">{isLoading ? "Loading" : placeholder}</option> : ""}
      {children}
    </select>
  );
}
