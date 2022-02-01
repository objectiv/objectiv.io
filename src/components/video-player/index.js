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
  enableControls = true
}) {
  const [isPlaying, setPlaying] = useState(false);

  let videoId = id ? id : url;

  function handlePlayPause() {
    setPlaying(!isPlaying);
  }

  return (
    <MediaPlayerContextWrapper id={videoId}>
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
  );
}

export default VideoPlayer;
