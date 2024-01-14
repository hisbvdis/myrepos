// <Checkbox value="" />
"use client";
import { useId, useContext } from "react";
import { CheckboxGroupContext } from "./CheckboxGroup";

export default function Checkbox(props) {
  const useID = useId();
  const radioGroupData = useContext(CheckboxGroupContext);

  const name = radioGroupData.name ?? props.name ?? "";
  const value = props.value ?? "";
  const selectValues = radioGroupData.selectValues ?? props.selectValues ?? "";

  const onChange = radioGroupData.onChange ?? props.onChange ?? ((e)=>e);
  const onChangeValue = radioGroupData.onChangeValue ?? props.onChangeValue ?? ((e)=>e);
  const { children } = props;

  return (
    <label htmlFor={useID} style={{display: "block"}}>
      <input
        id={useID}
        type="checkbox"
        name={name}
        value={value}
        checked={selectValues.includes(value)}
        onChange={(e) => {onChange(e); onChangeValue(e.target.value)}}
      />
      <span>{children}</span>
    </label>
  );
}
