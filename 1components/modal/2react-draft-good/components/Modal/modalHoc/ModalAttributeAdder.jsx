import { createElement } from "react"

const ModalAttributeAdder = ({ attr, children }) => {
  if (typeof children === "string" || children === undefined) {
    return createElement(
      "button",
      { ...children.props, type: "button", [attr]: "" },
      children
    );
  } else {
    return {
      ...children,
      props: { ...children.props, [attr]: "" },
    };
  }
}

export default ModalAttributeAdder;
