import React, { useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { useState } from "react";

const App = () => {
  const [messages, setMessages] = useState([]);
  const [value, setValue] = useState("");
  const ref = useRef(null);

  useEffect(() => {
    const lastMessages = messages[messages.length - 1];
    let timerId = null;
    if (messages.length && lastMessages.author !== "Bot") {
      timerId = setTimeout(() => {
        setMessages([
          ...messages,
          { author: "Bot", message: "Hello from bot" },
        ]);
      }, 500);
    }
    return () => clearInterval(timerId);
  }, [messages]);

  useEffect(() => {
    ref.current?.focus();
  }, []);

  // const handleChangeValue = (e) => setValue(e.target.value);
  const sendMessage = () => {
    setMessages([...messages, { author: "User", message: value }]);
    setValue("");
  };

  return (
    <div>
      {messages.map((message) => (
        <div>{message.message}</div>
      ))}

      <input
        ref={ref}
        placeholder="enter your message"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button onClick={sendMessage}>send message</button>
    </div>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
