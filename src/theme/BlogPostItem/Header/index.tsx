import React from 'react';
import Header from '@theme-original/BlogPostItem/Header';
import type HeaderType from '@theme/BlogPostItem/Header';
import type {WrapperProps} from '@docusaurus/types';
import { ContentContextWrapper } from '@objectiv/tracker-react';

type Props = WrapperProps<typeof HeaderType>;

export default function HeaderWrapper(props: Props): JSX.Element {
  return (
    <ContentContextWrapper id={'blog-post-header'}>
      <Header {...props} />
    </ContentContextWrapper>
  );
}
