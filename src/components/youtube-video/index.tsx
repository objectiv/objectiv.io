import React from 'react';
import styles from './styles.module.css';

function YouTubeVideo({src}) {
  // noinspection JSUnresolvedVariable - doesn't work for :local statements
  return (
      <div className={styles.videoWrapper}>
        <iframe src={src} frameBorder="0" allowFullScreen />
      </div>
    )
}

export default YouTubeVideo;
