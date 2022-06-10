import React, {ComponentProps} from 'react';
import type DocPaginatorType from '@theme/DocPaginator';
import DocPaginator from '@theme-original/DocPaginator';
import { TrackedNav } from '@objectiv/tracker-react';

type Props = ComponentProps<typeof DocPaginatorType>

export default function DocPaginatorWrapper(props: Props): JSX.Element {
  return (
    <TrackedNav id={'doc-paginator-navigation'}>
      <DocPaginator {...props} />
    </TrackedNav>
  );
}
