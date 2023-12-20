import React from "react";
import "../index.css";

const TabButton = (props) => {
  const classNames = [props.class, "py-3"].join(" ");
  return (
    <li className={classNames}>
      <button onClick={props.onClick}>{props.content}</button>
    </li>
  );
};

export default TabButton;
