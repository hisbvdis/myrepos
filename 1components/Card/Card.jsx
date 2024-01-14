import clsx from "clsx";
import "./Card.css";


export default function Card(props) {
  const { className, id, style, children } = props;

  return (
    <section className={clsx("card", className)} style={style}>
      {children}
    </section>
  )
}
