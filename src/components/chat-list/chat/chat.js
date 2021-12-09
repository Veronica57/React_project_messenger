import { ListItem, ListItemIcon, ListItemText } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { AccountCircle } from "@mui/icons-material";
import styles from "./chat.module.css";
import { useNavigate } from "react-router";
import { deleteConversation } from "../../../store/conversations";

const useStyles = makeStyles(() => {
  return {
    item: {
      "&.Mui-selected": {
        backgroundColor: "#aab9c8",
      },
      "&.Mui-selected:hover": {
        backgroundColor: "#aab9c8",
      },
    },
  };
});

export function Chat({ title, selected, handleListItemClick, dispatch }) {
  const s = useStyles();
  const navigate = useNavigate();

  const deleteRoom = (e) => {
    dispatch(deleteConversation(title));
    setTimeout(() => navigate("/chat"), 200);
  };

  return (
    <ListItem
      className={s.item}
      button={true}
      selected={selected}
      onClick={handleListItemClick}
    >
      <ListItemIcon>
        <button onClick={deleteRoom}>Delete</button>
        <AccountCircle fontSize="large" className={styles.icon} />
      </ListItemIcon>
      <div className={styles.description}>
        <ListItemText className={styles.text} primary={title} />
        <ListItemText className={styles.text} primary="12.30" />
      </div>
    </ListItem>
  );
}
