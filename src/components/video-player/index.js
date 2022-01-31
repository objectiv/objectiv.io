import React, { useState } from "react";
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
  id,
  caption,
  enableControls = true
}) {
  const [isPlaying, setPlaying] = useState(false);

  function handlePlayPause() {
    setPlaying(!isPlaying);
  }

  return (
    <div>
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
          </>
        )}
      </MediaPlayerContextWrapper>
      {caption && 
        <p className={clsx(styles.videoCaption)}>{caption}</p>
      }
    </div>
  );
}

export default VideoPlayer;
