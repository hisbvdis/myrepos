// <Control>...</Control>
"use client";
import clsx from "clsx";
import { useId, createContext, useState, useRef, useEffect } from "react"
import "./Control.css";


export default function Control(props) {
  const ref = useRef();
  const labelId = useId();
  const inputId = useId();
  const { className, id, style, children } = props;
  const [ required, setRequired ] = useState(props.required);

  useEffect(() => {
    if (!required && ref.current.querySelector("[required]")) {
      setRequired(true);
    }
  }, [])

  return (
    <ControlContext.Provider value={{ labelId, required, inputId }}>
      <div ref={ref} className={clsx("control", className)} style={style}>
        {children}
      </div>
    </ControlContext.Provider>
  )
}

export const ControlContext = createContext();
