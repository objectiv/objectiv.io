import React from 'react';
import * as loom from '@loomhq/loom-embed';

function LoomVideo({url, target}) {
  return loom.textReplace(url=url, target=target);
}

export default LoomVideo;
