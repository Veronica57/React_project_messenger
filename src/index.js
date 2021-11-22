import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider, createTheme } from "@mui/material";
import { MessageList } from "./components";
import { ChatList } from "./components";
import { Header } from "./components";
import { Layout } from "./components";

const theme = createTheme({
  palette: {
    primary: {
      main: "#58ab2b",
    },
  },
});

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Layout
        header={<Header />}
        chats={<ChatList />}
        messages={<MessageList />}
      />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// import PropTypes from "prop-types";
// import styles from "./index.module.css";

// App.PropTypes = {
// test1: PropTypes.number.isRequired,
// test2: PropTypes.string.isRequired,
// test3: PropTypes.func.isRequired,
// test4: PropTypes.shape(
//   { id: PropTypes.number.isRequired,}
// )
// };
