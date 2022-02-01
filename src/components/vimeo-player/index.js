import BrowserOnly from '@docusaurus/BrowserOnly';
import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";
import {
  MediaPlayerContextWrapper,
  trackMediaLoadEvent,
  trackMediaPauseEvent,
  trackMediaStartEvent,
  trackMediaStopEvent
} from "@objectiv/tracker-react";

function VimeoPlayer({ videoId, id }) {
  return  (
    <MediaPlayerContextWrapper id={id}>
      {(trackingContext) => (
        <BrowserOnly>
          {() => {
            const Vimeo = require('@u-wave/react-vimeo').default;
            return <Vimeo
              video={videoId}
              dnt={true}
              app_id='58479'
              onReady={() => trackMediaLoadEvent(trackingContext)}
              onPlay={() => trackMediaStartEvent(trackingContext)}
              onPause={() => trackMediaPauseEvent(trackingContext)}
              onEnd={() => trackMediaStopEvent(trackingContext)}
              className={clsx(styles.videoWrapper)}
              data-cookieconsent="ignore"
            />;
          }}
        </BrowserOnly>
      )}
    </MediaPlayerContextWrapper>
  );
}

export default VimeoPlayer;
