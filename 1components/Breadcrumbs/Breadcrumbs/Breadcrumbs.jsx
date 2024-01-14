import clsx from "clsx";
import Link from "next/link";
import s from "./Breadcrumbs.module.css";

export default function Breadcrumbs(props) {
  const { items, size } = props;
  const { className, id, style } = props;

  return (
    <nav className={clsx(s.breadcrumbs, size==="small" && s["breadcrumbs--small"], className)} id={id} style={style}>
      <ul className={s.breadcrumbs__list}>
        {items?.filter(({label}) => label).map(({label, href}, i) => (
          <li className={s.breadcrumbs__item} key={i}>
            {href
              ? <Link className={s.breadcrumbs__link} href={href}>{label}</Link>
              : <span className={s.breadcrumbs__span}>{label}</span>
            }
          </li>
        ))}
      </ul>
    </nav>
  )
}
