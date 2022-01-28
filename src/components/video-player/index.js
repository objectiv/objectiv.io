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
  id = "video",
  enableControls = true,
  showPlayPauseButton = false,
}) {
  const [isPlaying, setPlaying] = useState(false);

  function handlePlayPause() {
    setPlaying(!isPlaying);
  }

  return (
    <MediaPlayerContextWrapper id={id} className={styles.videoWrapper}>
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
          />
          {showPlayPauseButton && (
            <button className={clsx(styles.playButton)} onClick={handlePlayPause}>
              {isPlaying ? "Pause" : "Play"}
            </button>
          )}
        </>
      )}
    </MediaPlayerContextWrapper>
  );
}

export default VideoPlayer;
