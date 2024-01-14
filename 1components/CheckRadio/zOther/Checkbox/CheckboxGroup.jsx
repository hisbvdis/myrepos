// <CheckboxGroup name="name" selectValues="" onChange={(e)=>e}>
"use client";
import { createContext, useContext } from 'react';
import { FieldSetContext } from "../FieldSet";

export const CheckboxGroupContext = createContext();

export default function CheckboxGroup(props) {
  const { name="", selectValues="" } = props;
  const { onChange=e=>e, onChangeValue=e=>e } = props;
  const { children=[] } = props;
  const { legendId } = useContext(FieldSetContext) ?? "";

  return (
    <div role="radiogroup" aria-labelledby={legendId} style={{listStyle: "none", paddingInlineStart: 0}}>
      <CheckboxGroupContext.Provider value={{name, onChange, onChangeValue, selectValues}}>
        {children}
      </CheckboxGroupContext.Provider>
    </div>
  );
}
