import React from "react";
import Accordion from "../accordion";
import styles from "./Card.module.scss";

function Card() {
  return (
    <div className={styles.container}>
      <article className={styles.card}>
        <section className={styles.section}>
          <h1>FAQ</h1>
          <Accordion />
        </section>
      </article>
    </div>
  );
}

export default Card;
