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

function VimeoPlayer({ 
  videoId, 
  id, // required if the Video needs to be tracked
  paddingBottom = "58.25%", // the ratio  for the video, e.g. 58.25% for 16:9 videos
  caption = '',
}) {
  return  (
    <BrowserOnly>
      {() => {
        const Vimeo = require('@u-wave/react-vimeo').default;

        if (id) {
          return (
            <MediaPlayerContextWrapper id={id}>
              {(trackingContext) => (
                <>
                <Vimeo
                  video={videoId}
                  dnt={true}
                  app_id='58479'
                  onReady={() => trackMediaLoadEvent(trackingContext)}
                  onPlay={() => trackMediaStartEvent(trackingContext)}
                  onPause={() => trackMediaPauseEvent(trackingContext)}
                  onEnd={() => trackMediaStopEvent(trackingContext)}
                  className={clsx(styles.videoWrapper)}
                  style={{paddingBottom: paddingBottom}}
                  data-cookieconsent="ignore"
                />
                {caption &&
                  <p className={clsx(styles.videoCaption)}>{caption}</p>
                }
                </>
              )}
            </MediaPlayerContextWrapper>
          );
        } else {
          return (
            <>
              <Vimeo
                video={videoId}
                dnt={true}
                app_id='58479'
                className={clsx(styles.videoWrapper)}
                data-cookieconsent="ignore"
              />;
              {caption &&
                <p className={clsx(styles.videoCaption)}>{caption}</p>
              }
            </>
          );
        }

      }}
    </BrowserOnly>
  );
}

export default VimeoPlayer;
