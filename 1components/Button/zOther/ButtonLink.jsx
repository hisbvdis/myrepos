import { createElement } from "react";

const ButtonLink = (props) => {
  const { children } = props;
  const tag = props.tag || props.href ? "a" : "button";

  return createElement(tag, props, <>{children}</>);
}

export default ButtonLink;
