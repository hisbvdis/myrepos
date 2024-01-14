import clsx from "clsx";
import "./ControlContent.css";

export default function ControlContent(props) {
  const { className, children, style } = props;

  return (
    <div className={clsx("controlContent", className)} style={style}>
      {children}
    </div>
  )
}
