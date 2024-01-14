import { createPortal } from "react-dom";
import ModalTitle from "./ModalTitle";
import ModalDesc from "./ModalDesc";
import ModalClose from "./ModalClose";
import ModalCtrlEnter from "./ModalCtrlEnter";
import ModalFocus from "./ModalFocus";
import "./assets/modal";

const Modal = ({id}) => {
  return createPortal(<>
    <dialog className="modal" id={id} aria-labelledby={`${id}-title`} aria-describedby={`${id}-desc`} data-modal>
      <div className="modal__content">
        <ModalTitle>Modal 2 Title</ModalTitle>
        <ModalDesc>
          <p>Без интерактивных элементов – в фокусе кнопка "Ok"</p>
        </ModalDesc>
        <ModalClose>Close</ModalClose>
        <ModalCtrlEnter>
          <a href="https://google.com">Ctrl + Enter</a>
        </ModalCtrlEnter>
        <ModalFocus>
          <a href="#">Focus link</a>
        </ModalFocus>
      </div>
    </dialog>
  </>, document.body);
}

export default Modal;
