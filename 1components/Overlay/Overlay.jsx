import "./Overlay.css";


export default function Overlay(props) {
  const { isOpen, onClick=(e=>e) } = props;

  if (!isOpen) return null;
  return (
    <div className="overlay" onClick={onClick}></div>
  )
}
