import React from "react";
import styles from "./Accordion.module.scss";
import AccordianItem from "./AccordionItem";

const items = [
  {
    id: "a-1",
    question: "How many team members can I invite?",
    answer:
      "You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan.",
  },
  {
    id: "a-2",
    question: "What is the maximum file upload size?",
    answer:
      "No more than 2GB. All files in your account must fit your alloted storage space.",
  },
  {
    id: "a-3",
    question: "How do I reset password?",
    answer:
      "Click “Forgot password” from the login page or “Change password” from your profile page. A reset link will be emailed to you.",
  },
  {
    id: "a-4",
    question: "Can I cancel my subscription?",
    answer:
      "Yes! Send us a message and we’ll process your request no questions asked.",
  },
  {
    id: "a-5",
    question: "Do you provide additional support?",
    answer:
      "Chat and email support is available 24/7. Phone lines are open during normal business hours.",
  },
];

function Accordion() {
  return (
    <div className={styles.accordion}>
      <ul>
        {items.map((item) => {
          return <AccordianItem key={item.id} {...item} />;
        })}
      </ul>
    </div>
  );
}

export default Accordion;
