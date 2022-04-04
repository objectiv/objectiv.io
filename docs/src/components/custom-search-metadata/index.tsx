import React from "react";
import Head from '@docusaurus/Head';

type CustomSearchMetadataProps = {
  type: string, // can be used for grouping search results in the future
  platform: string // can be used for filtering on the platform type (e.g. 'React') in the future
}

export default function CustomSearchMetadata({ type, platform }: CustomSearchMetadataProps) {
  return (
    <Head>
      {type && <meta name="docsearch:type" content={type} />}
      {platform && <meta name="docsearch:platform" content={platform} />}
    </Head>
  );
}
