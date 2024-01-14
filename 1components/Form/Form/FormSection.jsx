"use client";
import clsx from "clsx";
import { useId, createContext } from "react";
import "./FormSection.css";


export default function FormSection(props) {
  const { className, id, style, children } = props;
  const headingId = useId();

  return (
    <FormSectionContext.Provider value={{headingId}}>
      <div className={clsx("formSection", className)} style={style} ariaLabelledBy={headingId}>
        {children}
      </div>
    </FormSectionContext.Provider>
  )
}
export const FormSectionContext = createContext();
