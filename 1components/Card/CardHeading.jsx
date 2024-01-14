import clsx from "clsx";
import "./CardHeading.css";


export default function CardHeading(props) {
  const { className, id, style, children } = props;

  return (
    <div id={id} className={clsx("cardHeading", className)} style={style}>
      {children}
    </div>
  )
}
