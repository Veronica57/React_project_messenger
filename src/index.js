import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material";
import { ChatPage } from "./pages";
import { Header } from "./components";

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
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<h1> Home page</h1>} />
          <Route path="/chat/*" element={<ChatPage />} />
        </Routes>
      </BrowserRouter>
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
