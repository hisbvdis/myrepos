import { createElement, useEffect, useRef } from "react"

const ModalChildCreator = ({tag, postFix, children}) => {
  const curr = useRef();
  
  useEffect(() => {
    const modal = curr.current.closest("[data-modal]");
    curr.current.id = `${modal.id}-${postFix}`;
    curr.current.className = `${modal.id}__${postFix}`;
  }, []);
  
  if (typeof children === "string" || children === undefined) {
    return createElement(tag, {ref: curr}, children);
  } else {
    return {...children, ref: curr};
  }
}

export default ModalChildCreator;
