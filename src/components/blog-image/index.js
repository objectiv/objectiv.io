import React from "react";
import useBaseUrl from '@docusaurus/useBaseUrl';
import clsx from "clsx";
import styles from "./styles.module.css";

function BlogImage({
  url,
  caption = '',
}) {

  return (
    <div>
      <img src={useBaseUrl(url)} alt={caption} />
      {caption && 
        <p className={clsx(styles.imageCaption)}>{caption}</p>
      }
    </div>
  );
}

export default BlogImage;
