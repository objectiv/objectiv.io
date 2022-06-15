import React from "react";
import useBaseUrl from '@docusaurus/useBaseUrl';
import { TrackedLink } from "../../trackedComponents/TrackedLink";
import { TrackedDiv } from "@objectiv/tracker-react";
import {interpolate} from '@docusaurus/Interpolate';

import clsx from "clsx";
import styles from "./styles.module.css";

function BlogImage({
  url,
  caption = '',
  captionLinks,
  size='normal'
}) {
  let imageCaption = caption;
  let imageAlt = caption;
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
      const fullLink = <TrackedLink href={linkTo}>{text}</TrackedLink>;
      links[linkId.toString()] = fullLink;
      imageAlt = caption.replace('{' + linkId.toString() + '}', text);
      linkId++; 
    }
    imageCaption = interpolate(caption, links);
  }

  let classNames = clsx(styles.blogImage);
  if (size == 'large') {
    classNames = clsx(styles.blogImage, styles.blogImageLarge)
  }

  // ensure the tracked div has an ID even if there's no imageAlt (with links)
  imageAlt = (imageAlt === '') ? url : imageAlt; 

  return (
    <TrackedDiv id={'image: ' + imageAlt}>
      <img src={useBaseUrl(url)} alt={imageAlt} className={classNames} />
      
        <p className={clsx(styles.imageCaption)}>{caption && imageCaption}</p>
      
    </TrackedDiv>
  );
}

export default BlogImage;
