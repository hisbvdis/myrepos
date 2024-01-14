"use client";
import { useContext } from "react";
import { FormContext } from "@/app/_components/Form/FormContext";

export default function FormHeading(props) {
  const { children } = props;
  const { formId } = useContext(FormContext);

  return (<>
    <h2 id={formId}>{children}</h2>
  </>)
}
