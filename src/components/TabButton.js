import React from "react";
import "../index.css";
import { useDispatch } from "react-redux";
import tabSlice from "../store/tabSlice";

const TabButton = (props) => {
  const dispatch = useDispatch();
  const { setTab } = tabSlice.actions;
  const classNames = [props.class, "py-3"].join(" ");
  return (
    <li className={classNames}>
      <button onClick={() => dispatch(setTab(props.content))}>
        {props.content}
      </button>
    </li>
  );
};

export default TabButton;
