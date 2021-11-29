import { useEffect, useContext } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { ThemeContext } from "../theme-context";
import { MessageList, Layout, ChatList } from "../components";

export const ChatPage = () => {
  const navigate = useNavigate();

  const {
    theme: { theme },
  } = useContext(ThemeContext);

  useEffect(() => {
    const listener = ({ code }) => {
      if (code === "Escape") {
        navigate("/chat");
      }
    };
    document.addEventListener("keydown", listener);
    return document.removeEventListener("keydown", listener);
  }, [navigate]);
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout
            chats={<ChatList />}
            messages={
              <h1 style={{ color: theme.color }}>Choose any chat...</h1>
            }
          />
        }
      />
      <Route
        path="/:roomId"
        element={<Layout chats={<ChatList />} messages={<MessageList />} />}
      />
    </Routes>
  );
  //   <Layout chats={<ChatList />} messages={<MessageList />} />;
};
