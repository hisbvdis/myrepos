import { useId } from "react";

export default function Radio(props) {
  const { name="", value="", valueToCompare="" } = props;
  const { onChange=(e)=>e, onChangeValue=(e)=>e } = props;
  const { children } = props;
  const useID = useId();

  return (
    <label htmlFor={useID}>
      <input
        id={useID}
        type="radio"
        name={name}
        value={value}
        checked={value === valueToCompare}
        onChange={(e) => {onChange(e); onChangeValue(e.target.value)}}
      />
      <span>{children}</span>
    </label>
  );
}
