import { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../../theme-context";
import styles from "./header.module.css";

export function Header() {
  const {
    theme: { theme, name },
    themeSetter,
  } = useContext(ThemeContext);

  return (
    <div className={styles.header}>
      <Link to="/">Home</Link>
      <Link to="/profile">Profile</Link>
      <Link to="/chat">Chat</Link>
      <Link to="/gists">Gists</Link>

      <hr />
      <p style={{ color: theme.color }}>{name}</p>
      <button disabled={name === "dark"} onClick={() => themeSetter("dark")}>
        dark
      </button>
      <button disabled={name === "light"} onClick={() => themeSetter("light")}>
        light
      </button>
    </div>
  );
}
