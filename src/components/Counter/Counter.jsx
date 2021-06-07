import React from "react";
import styles from "./Counter.module.scss";

const Counter = () => {
  let count = 0;
  return (
    <div className={styles.counter}>
      <p> Counter</p>
      <p> {count}</p>
      <div className={styles.buttons}>
        <span>-</span>
        <span>+</span>
      </div>
    </div>
  );
};

export default Counter;
