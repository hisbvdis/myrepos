import { useContext } from "react";
import { FieldContext } from "./FieldContext";

export default function FieldLabel(props) {
  const { children } = props;
  const { fieldId } = useContext(FieldContext);

  return (<>
    <label htmlFor={fieldId}>{children}</label>
  </>)
}
