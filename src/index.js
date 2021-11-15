import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

const message = <p>"Test message"</p>;

const Message = (props) => {
  return (
    <div className="message">
      <h1>Message</h1>
      <p>Message: {message}</p>
    </div>
  );
};

function App() {
  return <Message />;
}

ReactDOM.render(
  <React.StrictMode>
    <App newMessage={message} />
  </React.StrictMode>,
  document.getElementById("root")
);
