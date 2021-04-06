import React, { useState } from "react";
import styles from "./Accordion.module.scss";

interface Props {
  question: string;
  answer: string;
}

function AccordionItem({ question, answer }: Props) {
  const [visible, setVisible] = useState(false);
  const toggleVisible = () => {
    setVisible(!visible);
  };
  return (
    <div className={styles.item}>
      <h6 onClick={toggleVisible}>
        {question}{" "}
        <img
          src="/images/icon-arrow-down.svg"
          alt="open"
          width="10"
          height="7"
          className={visible ? styles.iconVisible : styles.icon}
        />
      </h6>
      <p className={visible ? styles.show : ''}>{answer}</p>
    </div>
  );
}

export default AccordionItem;
