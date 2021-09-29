import React from 'react';
import Link from '@docusaurus/Link';
import clsx from 'clsx';
import styles from './styles.module.css';
import { tagLink, tagElement } from "@objectiv/tracker-browser";

function AnnouncementBar({children, title, content, ctaLink, ctaText}) {
  return (
    <div 
      {...tagElement({id: 'announcement-bar'})}
      className={clsx(styles.announcement)}
    >
      <span className={styles.announcementStar}><img src="/img/icons/icon-star.svg" /></span>
        <strong>{title}</strong>&nbsp;
        {content}&nbsp;
        <Link 
          to={ctaLink}
          {...tagLink({ id: 'announcement-cta', text: ctaText, href: ctaLink })}
        >
          {ctaText}
        </Link>
      <span className={styles.announcementStar}><img src="/img/icons/icon-star.svg" /></span>
    </div>
  );
}

export default AnnouncementBar;
