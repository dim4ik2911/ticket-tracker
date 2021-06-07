import React from "react";
import styles from "./Counter.module.scss";
import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const countMinusOne = () => {
    if (count > 0) {
      return setCount(count - 1);
    }
  };
  const countPlusOne = () => {
    return setCount(count + 1);
  };
  {
    /* <button onClick={() => setCount(count + 1)}></button> */
  }
  return (
    <div className={styles.counter}>
      <p> Counter</p>
      <p className={styles.count}> {count}</p>
      <div className={styles.buttons}>
        <span onClick={countMinusOne}>-</span>
        <span onClick={countPlusOne}>+</span>
      </div>
    </div>
  );
};

export default Counter;
