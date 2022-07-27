import { TrackedDiv } from "@objectiv/tracker-react";
import clsx from 'clsx';
import React from 'react';
import { TrackedLink } from "../../objectiv/TrackedLink";
import styles from './styles.module.css';

function AnnouncementBar({title, content, ctaLink, ctaText, icon='icon-star', theme='yellow'}) {
  return (
    <TrackedDiv id={'announcement-bar'}
      className={clsx(theme=='dark' ? styles.dark : null)}>
      <div className={clsx(styles.announcement)}>
        <span className={clsx(styles.announcementStar, styles.announcementStarStart)}><img src={"/img/icons/" + icon + ".svg"} alt='star' /></span>
          <strong>{title}</strong>&nbsp;
          {content}&nbsp;
          <TrackedLink to={ctaLink} waitUntilTracked={true}>
            {ctaText}
          </TrackedLink>
        <span className={clsx(styles.announcementStar, styles.announcementStarEnd)}><img src={"/img/icons/" + icon + ".svg"} alt='star' /></span>
      </div>
    </TrackedDiv>
  );
}

export default AnnouncementBar;
