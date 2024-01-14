import clsx from "clsx";
import "./H.scss"

export const H1 = ({className, children}) => {
  return (
    <h1 className={clsx("h1", className)}>{children}</h1>
  );
}

export const H2 = ({className, children}) => {
  return (
    <h2 className={clsx("h2", className)}>{children}</h2>
  );
}

export const H3 = ({className, children}) => {
  return (
    <h3 className={clsx("h3", className)}>{children}</h3>
  );
}

export const H4 = ({className, children}) => {
  return (
    <h4 className={clsx("h4", className)}>{children}</h4>
  );
}

export const H5 = ({className, children}) => {
  return (
    <h5 className={clsx("h5", className)}>{children}</h5>
  );
}

export const H6 = ({className, children}) => {
  return (
    <h6 className={clsx("h6", className)}>{children}</h6>
  );
}
