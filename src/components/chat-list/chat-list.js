import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Button, List } from "@mui/material";
import { Chat } from "./chat";
import {
  conversationsSelector,
  createConversation,
} from "../../store/conversations";

export const ChatList = () => {
  const { roomId } = useParams();
  const conversations = useSelector(conversationsSelector);
  const dispatch = useDispatch();

  const createConversationByName = () => {
    const name = prompt("Enter chat room name");
    const isValidName = !conversations.includes(name);
    if (name && isValidName) {
      dispatch(createConversation(name));
    } else {
      alert("Invalid chat room name");
    }
  };

  return (
    <List component="nav">
      <Button onClick={createConversationByName}>Create</Button>
      {conversations.map((chat) => (
        <Link key={chat.title} to={`/chat/${chat.title}`}>
          <Chat
            title={chat.title}
            selected={chat.title === roomId}
            dispatch={dispatch}
          />
        </Link>
      ))}
    </List>
  );
};
