import clsx from "clsx";
import "./Container.css";


export default function Container(props) {
  const { className, id, style, children } = props;

  return (
    <div className={clsx("container", className)} style={style}>
      {children}
    </div>
  )
}
