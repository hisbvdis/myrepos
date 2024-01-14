import ModalAttributeAdder from "./modalHoc/ModalAttributeAdder";

const ModalFocus = ({ children }) => {
  return ModalAttributeAdder({attr: "data-focus", children})
}

export default ModalFocus;
