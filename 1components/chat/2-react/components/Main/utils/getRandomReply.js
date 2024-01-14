import { REPLIES } from "../constants";

export const getRandomReply = () => {
  const randomIndex = Math.floor(Math.random() * REPLIES.length);

  return REPLIES[randomIndex];
}