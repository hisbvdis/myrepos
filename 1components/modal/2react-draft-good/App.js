import { BrowserRouter } from "react-router-dom";
import Modal from "./components/Modal/Modal";

const App = () => {
  return (<>
    <BrowserRouter>
      <button data-open-modal="modal1">Open</button>
      <Modal id="modal1"/>
    </BrowserRouter>
  </>)
}

export default App;
