import React from "react";
import ReactPlayer from "react-player";
import {
  MediaPlayerContextWrapper,
  trackMediaLoadEvent,
  trackMediaPauseEvent,
  trackMediaStartEvent,
  trackMediaStopEvent
} from "@objectiv/tracker-react";

import clsx from "clsx";
import styles from "./styles.module.css";

function VideoPlayer({
  url,
  id, // required if the Video needs to be tracked
  caption = '',
  enableControls = true
}) {
  if (id) {
    return (
      <MediaPlayerContextWrapper id={id}>
        {(trackingContext) => (
          <>
            <ReactPlayer
              url={url}
              playing={isPlaying}
              controls={enableControls}
              onReady={() => trackMediaLoadEvent(trackingContext)}
              onStart={() => trackMediaStartEvent(trackingContext)}
              onPause={() => trackMediaPauseEvent(trackingContext)}
              onEnded={() => trackMediaStopEvent(trackingContext)}
              className={clsx(styles.videoWrapper)} 
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
      <div>
        <ReactPlayer
          url={url}
          playing={isPlaying}
          controls={enableControls}
          className={clsx(styles.videoWrapper)} 
        />
        {caption && 
          <p className={clsx(styles.videoCaption)}>{caption}</p>
        }
      </div>
    );
  }
}

export default VideoPlayer;
