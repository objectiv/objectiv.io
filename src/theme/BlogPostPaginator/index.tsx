import React, {ComponentProps} from 'react';
import type BlogPostPaginatorType from '@theme/BlogPostPaginator';
import BlogPostPaginator from '@theme-original/BlogPostPaginator';

// OBJECTIV
import { TrackedNav } from "@objectiv/tracker-react";
// END OBJECTIV

type Props = ComponentProps<typeof BlogPostPaginatorType>

export default function BlogPostPaginatorWrapper(props: Props): JSX.Element {
  return (
    // OBJECTIV
    <TrackedNav id={'blog-post-paginator'}>
      <BlogPostPaginator {...props} />
    </TrackedNav>
    // END OBJECTIV
  );
}
