import React, {ComponentProps} from 'react';
import TOC from '@theme-original/TOC';
import type TOCType from '@theme/TOC';
import { TrackedNav } from '@objectiv/tracker-react';

type Props = ComponentProps<typeof TOCType>;

export default function TOCWrapper(props: Props): JSX.Element {
  return (
    <TrackedNav id={'toc'}>
      <TOC {...props} />
    </TrackedNav>
  );
}
