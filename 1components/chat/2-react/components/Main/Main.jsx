import { getRandomReply } from "./utils/getRandomReply";
import { useSelector, useDispatch } from "react-redux";
import { addMessage, addReply, selectAllMessages } from "./main.slice";
import { useEffect, useRef, useState } from "react";
import Message from "./Message/Message";
import "./Main.css";

const Main = () => {
  const dispatch = useDispatch();
  const messages = useSelector(selectAllMessages);
  const [inputValue, setInputValue] = useState("");
  const messageListElem = useRef();

  const handleSubmit = () => {
    dispatch(addMessage(inputValue));
    setTimeout(() => {
      dispatch(addReply(getRandomReply()));
    }, 1000);
  }

  useEffect(() => {
    messageListElem.current.scrollTo(0, messageListElem.current.scrollHeight);
  }, [messages])
  
  return (
    <>
      <ul className="main" ref={messageListElem}>
        {messages.map((msg, i) => (
          <Message key={i} {...msg} />
        ))}
      </ul>
      <p className="main__field">
        <textarea
          className="main__textarea"
          onChange={(evt) => setInputValue(evt.target.value)}
          value={inputValue}
        ></textarea>
      </p>
      <p className="main__field">
        <button className="main__btn" type="button" onClick={handleSubmit}>
          Send message
        </button>
      </p>
    </>
  );
}

export default Main;