import { format } from "date-fns";
import classNames from "classnames";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { withCounter } from "../../../hocs/with-counter";
import { deleteMessageById } from "../../../store/messages";
import styles from "./message.module.css";
import { Button } from "@mui/material";

export const Message = withCounter(
  ({ message, increment, decrement, count }) => {
    const dispatch = useDispatch();
    const { roomId } = useParams();

    return (
      <div
        className={classNames(styles.message, {
          [styles.currentMessage]: message.author === "User",
        })}
      >
        <h3>{message.message}</h3>
        <p>{message.author}</p>
        <p>{format(message.date, "yyyy-MM-dd HH:MM:SS")}</p>

        <Button onClick={() => dispatch(deleteMessageById(message.id, roomId))}>
          X
        </Button>
      </div>
    );
  }
);
