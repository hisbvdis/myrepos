import clsx from "clsx";
import { useContext } from "react";
import { FormSectionContext } from ".";
import "./FormSectionHeading.css";


export default function FormSectionHeading(props) {
  const { children } = props;
  const { headingId } = useContext(FormSectionContext);

  return (
    <h3 id={headingId} className={clsx("formSectionHeading")}>
      {children}
    </h3>
  )
}
