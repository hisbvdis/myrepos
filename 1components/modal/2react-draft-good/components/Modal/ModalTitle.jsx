import ModalChildCreator from "./modalHoc/ModalChildCreator";

const ModalTitle = (children) => {
  return ModalChildCreator({tag: "h2", postFix: "title", ...children});
}

export default ModalTitle;
