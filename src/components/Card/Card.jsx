import React from "react";
import styles from "./Card.module.scss";
import Counter from "../Counter";

const Card = (props) => {
  const { name, role } = props.member;
  return (
    <>
      <p>{name}</p>
      <p>{role}</p>
    </>
  );
};

export default Card;
