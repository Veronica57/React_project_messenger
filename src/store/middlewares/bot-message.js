import { sendMessage } from "../messages";
import { SEND_MESSAGE } from "../messages/types";

export const botSendMessage = (store) => (next) => (action) => {
  if (
    action.type === SEND_MESSAGE &&
    action.payload.message.author === "User"
  ) {
    setTimeout(() => {
      store.dispatch(
        sendMessage(
          { author: "Bot", message: "Hello from Bot" },
          action.payload.roomId
        )
      );
    }, 300);
  }
  return next(action);
};
