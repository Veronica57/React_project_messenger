// import classnames from "classnames";

// const className = classnames("class1", "class2", { botMessage: message.author == "Bot" });

export const Message = ({ message }) => {
  return (
    <div>
      <div>{message.message}</div>
      <div>{message.author}</div>
      <div>12:25</div>
      <hr />
    </div>
  );
};
