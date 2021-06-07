import React from "react";
import styles from "./Card.module.scss";
import Counter from "../Counter";

const Card = (props) => {
  const { name, role } = props.member;
  return (
    <div className={styles.card}>
      <div className={styles.text}>
        <p className={styles.title}>{name}</p>
        <p className={styles.role}>{role}</p>
      </div>
      <Counter></Counter>
    </div>
  );
};

export default Card;
