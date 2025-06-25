import React from "react";
import { MdMessage } from "react-icons/md";
import styles from "./Button.module.css";

const Button = (props) => {
  return (
    <button onClick={props.onClick}
      className={props.isOutline ? styles.outLine_btn : styles.primary_btn}
    >
      {props.icon}
      {props.text}
    </button>
  );
};

export default Button;
