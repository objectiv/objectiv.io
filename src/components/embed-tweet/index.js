import React from "react";
import { TwitterTweetEmbed } from 'react-twitter-embed';
import { TrackedContentContext } from '@objectiv/tracker-react';

function EmbedTweet({
  id
}) {
  return (
    <TrackedContentContext Component={'div'} id={id}>
      <TwitterTweetEmbed 
        tweetId={id}
      />
    </TrackedContentContext>
  );
}

export default EmbedTweet;
