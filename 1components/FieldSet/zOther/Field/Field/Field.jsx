import { useId } from "react"
import { FieldContext } from "./FieldContext";

export default function Field(props) {
  const { children } = props;
  const fieldId = useId();

  return (<>
    <div>
      <FieldContext.Provider value={{fieldId}}>
        {children}
      </FieldContext.Provider>
    </div>
  </>)
}
