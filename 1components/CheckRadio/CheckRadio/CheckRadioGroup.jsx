// <CheckRadioGroup name="name" valueToCompare={""} arrayToCompare={[]} onChange={(e)=>e}>
"use client";
import { createContext, useContext, useId, useRef } from 'react';
import { ControlContext } from "@/app/_components/Control";
import "./CheckRadioGroup.css";
import clsx from "clsx";

export default function CheckRadioGroup(props) {
  const ref = useRef();
  const dataFromControl = useContext(ControlContext);

  const { name=useId(), valueToCompare="", arrayToCompare=[] } = props;
  const { onChange=(e)=>e } = props;
  const { className, id, style, children } = props;
  const labelId = dataFromControl?.labelId;
  const required = props.required ?? dataFromControl?.required ?? false;
  const disabled = props.disabled ?? dataFromControl?.disabled ?? false;

  return (
    <CheckRadioGroupContext.Provider value={{name, onChange, valueToCompare, arrayToCompare, required, disabled}}>
      <div ref={ref} className={clsx("checkRadioGroup", className)} style={style} aria-labelledby={labelId} role="group">
        {children}
      </div>
    </CheckRadioGroupContext.Provider>
  );
}

export const CheckRadioGroupContext = createContext();
