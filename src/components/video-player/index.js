import React, { useState } from "react";
import ReactPlayer from "react-player";
import { MediaPlayerContextWrapper } from "@objectiv/tracker-react";
import {
  useMediaLoadEventTracker,
  useMediaStartEventTracker,
  useMediaPauseEventTracker,
  useMediaStopEventTracker,
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
  const trackMediaLoad = useMediaLoadEventTracker();
  const trackMediaStart = useMediaStartEventTracker();
  const trackMediaPause = useMediaPauseEventTracker();
  const trackMediaStop = useMediaStopEventTracker();

  function handlePlayPause() {
    setPlaying(!isPlaying);
  }

  return (
    <MediaPlayerContextWrapper id={id} className={styles.videoWrapper}>
      <ReactPlayer
        url={url}
        playing={isPlaying}
        controls={enableControls}
        onReady={trackMediaLoad}
        onStart={trackMediaStart}
        onPause={trackMediaPause}
        onEnded={trackMediaStop}
      />
      {showPlayPauseButton && (
        <button className={clsx(styles.playButton)} onClick={handlePlayPause}>
          {isPlaying ? "Pause" : "Play"}
        </button>
      )}
    </MediaPlayerContextWrapper>
  );
}

export default VideoPlayer;
