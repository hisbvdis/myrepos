// <CheckRadio value=""/>
"use client";
import clsx from "clsx";
import { RequiredInput } from "@/app/_components/RequiredInput";
import { useId, useContext, useRef } from "react";
import { CheckRadioGroupContext } from "./CheckRadioGroup";
import "./CheckRadio.css";

function CheckRadio(props) {
  const id = useId();
  const dataFromCheckRadioGroup = useContext(CheckRadioGroupContext);
  const ref = useRef();

  const type = props.type;
  const name = props.name ?? dataFromCheckRadioGroup?.name ?? "";
  const value = props.value ?? "";
  const valueToCompare = props.valueToCompare ?? dataFromCheckRadioGroup?.valueToCompare ?? "";
  const arrayToCompare = props.arrayToCompare ?? dataFromCheckRadioGroup?.arrayToCompare ?? [];
  const checked = props.checked ?? (valueToCompare ? value === valueToCompare : arrayToCompare.includes(value));
  const onChange = props.onChange ?? dataFromCheckRadioGroup?.onChange ?? ((e)=>e);
  const required = props.required ?? false;
  const requiredGroup = dataFromCheckRadioGroup?.required ?? false;
  const disabled = props.disabled ?? dataFromCheckRadioGroup?.disabled ?? false;
  const { className, style, children } = props;
  const { tabIndex=0 } = props;

  return (
    <label className={clsx("checkRadio", className)} htmlFor={id} style={style}>
      <input
        id={id}
        className="checkRadio__input"
        type={type}
        ref={ref}
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
        required={required}
        tabIndex={tabIndex}
        disabled={disabled}
      />
      {type === "checkbox" && requiredGroup ? <RequiredInput name={name} checked={checked} required={required}/> : ""}
      <span>{children}</span>
    </label>
  );
}

export const Checkbox = (props) => <CheckRadio type="checkbox" {...props}/>;
export const Radio = (props) => <CheckRadio type="radio" {...props}/>;