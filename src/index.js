import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ChatPage, ProfilePage } from "./pages";
import { Header } from "./components";
import { CustomThemeProvider } from "./theme-context";
import { store } from "./store";
// import { store } from "./store/my-redux";
//
import "./palette.css";
import "./global.css";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <CustomThemeProvider>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<h1> Home page</h1>} />
            <Route path="/chat/*" element={<ChatPage />} />
            <Route path="/profile" element={<ProfilePage />} />
          </Routes>
        </BrowserRouter>
      </CustomThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

//
//
//
//
//
//
//
//

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
