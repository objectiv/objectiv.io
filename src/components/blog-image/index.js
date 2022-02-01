import React from "react";
import useBaseUrl from '@docusaurus/useBaseUrl';
import Link from "@docusaurus/Link";
import {interpolate} from '@docusaurus/Interpolate';

import clsx from "clsx";
import styles from "./styles.module.css";

function BlogImage({
  url,
  caption = '',
  captionLinks
}) {
  if(captionLinks && captionLinks.length > 0) {
    let links = {};
    let linkId = 1;
    for (const link of captionLinks) {
      if (!link?.to) {
        break;
      }
      // use the base URL for all links
      const linkTo = useBaseUrl(link.to);
      const text = link.text ? link.text : '';
      const fullLink = <Link to={linkTo}>{text}</Link>;
      links[linkId.toString()] = fullLink;
      linkId++; 
    }
    caption = interpolate(caption, links);
  }

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
