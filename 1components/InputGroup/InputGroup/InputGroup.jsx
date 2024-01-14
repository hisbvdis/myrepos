import "./InputGroup.css";

export default function InputGroup(props) {
  const { children } = props;

  return (
    <div style={{display: "flex"}}>
      {children}
    </div>
  )
}
