import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

function BlogQuestionAnswer({
  question,
  answer
}) {

  return (
    <div className={clsx(styles.questionAnswer)}>
      <q className={clsx(styles.question)}>
        {question}
      </q>
      {answer && <p className={clsx(styles.answer)}>{answer}</p>}
    </div>
  );
}

export default BlogQuestionAnswer;
