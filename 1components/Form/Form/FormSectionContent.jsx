import clsx from "clsx";
import "./FormSectionContent.css";

export default function FormSectionContent(props) {
  const { className, children } = props;

  return (
    <div className={clsx("formSectionContent", className)}>
      {children}
    </div>
  )
}
