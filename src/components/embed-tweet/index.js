import React from "react";
import { TwitterTweetEmbed } from 'react-twitter-embed';
import { TrackedContentContext } from '@objectiv/tracker-react';

function EmbedTweet({
  tweetId
}) {
  return (
    <TrackedContentContext Component={'div'} id={tweetId}>
      <TwitterTweetEmbed 
        tweetId={tweetId}
      />
    </TrackedContentContext>
  );
}

export default EmbedTweet;
