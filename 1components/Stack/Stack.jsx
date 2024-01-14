import clsx from "clsx";
import "./Stack.css";

export default function Stack(props) {
  const { className, id, style, children } = props;
  const { gap, direction } = props;

  return (
    <div className={clsx("stack", className, direction === "column" && "stack--column")} style={{...style, "--controls-gap": gap}}>
      {children}
    </div>
  )
}
