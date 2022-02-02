import React from "react";
import { TwitterTweetEmbed } from 'react-twitter-embed';
import { ContentContextWrapper } from '@objectiv/tracker-react';

function EmbedTweet({
  id
}) {
  return (
    <ContentContextWrapper id={id}>
      <TwitterTweetEmbed 
        tweetId={id}
      />
    </ContentContextWrapper>
  );
}

export default EmbedTweet;
