import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

function BlogQuestion({
  question
}) {

  return (
    <q className={clsx(styles.question)}>
      {question}
    </q>
  );
}

export default BlogQuestion;
