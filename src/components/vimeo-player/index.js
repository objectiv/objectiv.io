import React, { useState } from "react";
import clsx from "clsx";
import styles from "./styles.module.css";
import {
  MediaPlayerContextWrapper,
  trackMediaLoadEvent,
  trackMediaPauseEvent,
  trackMediaStartEvent,
  trackMediaStopEvent
} from "@objectiv/tracker-react";

import Vimeo from '@u-wave/react-vimeo';

function VimeoPlayer({ videoId, id }) {
  return (
    <MediaPlayerContextWrapper id={id}>
      {(trackingContext) => (
        <>
        <Vimeo
          video={videoId}
          dnt='true'
          app_id='58479'
          onReady={() => trackMediaLoadEvent(trackingContext)}
          onPlay={() => trackMediaStartEvent(trackingContext)}
          onPause={() => trackMediaPauseEvent(trackingContext)}
          onEnd={() => trackMediaStopEvent(trackingContext)}
          className={clsx(styles.videoWrapper)}
          />
        </>
      )}
    </MediaPlayerContextWrapper>
  );
}

export default VimeoPlayer;
