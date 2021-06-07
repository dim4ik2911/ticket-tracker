import React from "react";
import styles from "./Card.module.scss";
import Counter from "../Counter";

const Card = (props) => {
  const { name, role } = props.member;
  return (
    <div className={styles.card}>
      <div className={styles.text}>
        <p>{name}</p>
        <p>{role}</p>
      </div>
      <Counter></Counter>
    </div>
  );
};

export default Card;
