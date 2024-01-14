import ModalAttributeAdder from "./modalHoc/ModalAttributeAdder";

const ModalClose = ({ children }) => {
  return ModalAttributeAdder({attr: "data-close-btn", children})
}

export default ModalClose;
