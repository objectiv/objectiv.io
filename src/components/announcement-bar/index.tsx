import clsx from 'clsx';
import React from 'react';
import { TrackedDiv } from "../../trackedComponents/TrackedDiv";
import { TrackedLink } from "../../trackedComponents/TrackedLink";
import styles from './styles.module.css';

function AnnouncementBar({title, content, ctaLink, ctaText}) {
  return (
    <TrackedDiv id={'announcement-bar'}>
      <div className={clsx(styles.announcement)}>
        <span className={styles.announcementStar}><img src="/img/icons/icon-star.svg" alt='star' /></span>
          <strong>{title}</strong>&nbsp;
          {content}&nbsp;
          <TrackedLink to={ctaLink} waitUntilTracked={true}>
            {ctaText}
          </TrackedLink>
        <span className={styles.announcementStar}><img src="/img/icons/icon-star.svg" alt='star' /></span>
      </div>
    </TrackedDiv>
  );
}

export default AnnouncementBar;
