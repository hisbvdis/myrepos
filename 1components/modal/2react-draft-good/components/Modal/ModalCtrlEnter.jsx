import ModalAttributeAdder from "./modalHoc/ModalAttributeAdder";

const ModalCtrlEnterBtn = ({ children }) => {
  return ModalAttributeAdder({attr: "data-ctrl-enter-btn", children})
}

export default ModalCtrlEnterBtn;
