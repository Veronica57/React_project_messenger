import React, { useCallback, useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import debounce from "lodash.debounce";
import { Input, InputAdornment } from "@mui/material";
import { Send } from "@mui/icons-material";
import { useStyles } from "./use-styles";
import { Message } from "./message/index";

export const MessageList = () => {
  const { roomId } = useParams();
  const [messages, setMessages] = useState({});
  const [value, setValue] = useState("");
  const ref = useRef(null);
  const refWrapper = useRef(null);
  const styles = useStyles();

  const sendMessage = useCallback(
    (author = "User", botMessage) => {
      if (value || botMessage) {
        setMessages({
          ...messages,
          [roomId]: [
            ...(messages[roomId] ?? []),
            { author, message: value || botMessage, date: new Date() },
          ],
        });
        setValue("");
      }
    },
    [messages, value, roomId]
  );

  useEffect(() => {
    const roomMessages = messages[roomId] ?? [];
    const lastMessages = roomMessages[roomMessages.length - 1];
    let timerId = null;
    if (roomMessages.length && lastMessages.author !== "Bot") {
      timerId = setTimeout(() => {
        sendMessage("Bot", "Hello from Bot");
      }, 500);
    }
    return () => clearInterval(timerId);
  }, [messages, roomId, sendMessage]);

  useEffect(() => {
    ref.current?.focus();
  }, []);

  useEffect(() => {
    if (refWrapper.current) {
      refWrapper.current.scrollTo(0, refWrapper.current.scrollHeight);
    }
  }, [messages]);

  useEffect(() => {
    let block = refWrapper.current;
    const cb = debounce(() => console.log("height", block?.scrollTop), 200);
    if (block) {
      block.addEventListener("scroll", cb);
    }
    return () => block?.removeEventListener("scroll", cb);
  }, []);

  function handlePressInput({ code }) {
    if (code === "Enter") {
      sendMessage();
    }
  }

  const roomMessages = messages[roomId] ?? [];

  return (
    <div ref={refWrapper} className={styles.wrapper}>
      {roomMessages.map((message, index) => (
        <Message message={message} key={index} />
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
