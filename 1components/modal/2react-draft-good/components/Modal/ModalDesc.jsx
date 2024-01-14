import ModalChildCreator from "./modalHoc/ModalChildCreator";

const ModalDesc = ({children}) => {
  return ModalChildCreator({tag: "p", postFix: "desc", children});
}

export default ModalDesc;
