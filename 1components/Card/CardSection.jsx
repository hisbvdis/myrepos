import clsx from "clsx";
import "./CardSection.css";


export default function CardSection(props) {
  const { className, id, style, children } = props;

  return (
    <div className={clsx("cardSection", className)} style={style}>
      {children}
    </div>
  )
}
