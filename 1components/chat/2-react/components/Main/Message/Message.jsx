import "./Message.css";

const Message = ({text, isCurrentUser}) => {
  const CURRENT_USER_AVATAR_URL = "https://randomuser.me/api/portraits/lego/2.jpg";
  const SECOND_USER_AVATAR_URL = "https://randomuser.me/api/portraits/lego/1.jpg";
  
  return (
    <li className={`message ${isCurrentUser ? "message--my" : "message--other"}`}>
      <p className="message__avatar">
        <img
          className="message__img"
          src={isCurrentUser ? CURRENT_USER_AVATAR_URL : SECOND_USER_AVATAR_URL}
          alt={isCurrentUser ? "Your avatar" : "Your companion avatar"}
          width="107"
          height="107"
        />
      </p>
      <p className="message__text">{text}</p>
    </li>
  );
}

export default Message;