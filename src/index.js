import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ChatPage } from "./pages";
import { Header } from "./components";
import { CustomThemeProvider } from "./theme-context";

ReactDOM.render(
  <React.StrictMode>
    <CustomThemeProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<h1> Home page</h1>} />
          <Route path="/chat/*" element={<ChatPage />} />
        </Routes>
      </BrowserRouter>
    </CustomThemeProvider>
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
