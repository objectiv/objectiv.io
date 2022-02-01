import React, { useState } from "react";
import ReactPlayer from "react-player/vimeo";
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
  return (
    <MediaPlayerContextWrapper id={id}>
      {(trackingContext) => (
        <>
          <ReactPlayer
            url={url}
            config={{
              vimeo: {
                dnt: false,
                playerOptions: {
                  dnt: false
                }
              }
            }}
            controls={enableControls}
            onReady={() => trackMediaLoadEvent(trackingContext)}
            onStart={() => trackMediaStartEvent(trackingContext)}
            onPause={() => trackMediaPauseEvent(trackingContext)}
            onEnded={() => trackMediaStopEvent(trackingContext)}
            className={clsx(styles.videoWrapper)} 
            data-cookieconsent="ignore" 
          />
        </>
      )}
    </MediaPlayerContextWrapper>
  );
}

export default VideoPlayer;
