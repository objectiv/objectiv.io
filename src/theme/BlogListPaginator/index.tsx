import React, {ComponentProps} from 'react';
import type BlogListPaginatorType from '@theme/BlogListPaginator';
import BlogListPaginator from '@theme-original/BlogListPaginator';

// OBJECTIV
import { TrackedNav } from "@objectiv/tracker-react";
// END OBJECTIV

type Props = ComponentProps<typeof BlogListPaginatorType>

export default function BlogListPaginatorWrapper(props: Props): JSX.Element {
  return (
    // OBJECTIV
    <TrackedNav id={'blog-list-paginator'}>
      <BlogListPaginator {...props} />
    </TrackedNav>
    // END OBJECTIV
  );
}
