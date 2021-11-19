import Link from '@docusaurus/Link';
import { tagElement, tagLink } from "@objectiv-analytics/tracker-browser";
import clsx from 'clsx';
import React from 'react';
import styles from './styles.module.css';

function AnnouncementBar({title, content, ctaLink, ctaText}) {
  return (
    <div 
      {...tagElement({id: 'announcement-bar'})}
      className={clsx(styles.announcement)}
    >
      <span className={styles.announcementStar}><img src="/img/icons/icon-star.svg" alt='star' /></span>
        <strong>{title}</strong>&nbsp;
        {content}&nbsp;
        <Link 
          to={ctaLink}
          {...tagLink({ 
              id: 'announcement-cta', 
              text: ctaText, 
              href: ctaLink, 
              options: {
                trackClicks: {
                  waitUntilTracked: true
                }
              }
            })
          }
        >
          {ctaText}
        </Link>
      <span className={styles.announcementStar}><img src="/img/icons/icon-star.svg" alt='star' /></span>
    </div>
  );
}

export default AnnouncementBar;
