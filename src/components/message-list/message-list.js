import React, { useEffect, useRef, useState } from "react";
import { Input, InputAdornment } from "@mui/material";
import { Send } from "@mui/icons-material";
import { useStyles } from "./use-styles";
import { Message } from "./message/index";

export const MessageList = () => {
  const [messages, setMessages] = useState([]);
  const [value, setValue] = useState("");
  const ref = useRef(null);
  const styles = useStyles();

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

  const sendMessage = () => {
    if (value) {
      setMessages([
        ...messages,
        { author: "User", message: value, date: new Date() },
      ]);
      setValue("");
    }
  };

  const handlePressInput = ({ code }) => {
    if (code === "Enter") {
      sendMessage();
    }
  };

  return (
    <div className={styles.wrapper}>
      {messages.map((message) => (
        <Message message={message} />
      ))}

      <Input
        className={styles.input}
        fullWidth
        ref={ref}
        placeholder="enter your message"
        value={value}
        // const handleChangeValue = (e) => setValue(e.target.value); //may create a function
        onChange={(e) => setValue(e.target.value)}
        onKeyPress={handlePressInput}
        endAdornment={
          <InputAdornment position="end">
            <Send className={styles.icon} onClick={sendMessage} />
          </InputAdornment>
        }
      />
      {/* <Button onClick={sendMessage}>send message</Button> */}
    </div>
  );
};

// import styles from "./message-list.module.css";
