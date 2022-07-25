import React from 'react';
import Footer from '@theme-original/BlogPostItem/Footer';
import type FooterType from '@theme/BlogPostItem/Footer';
import type {WrapperProps} from '@docusaurus/types';
import { ContentContextWrapper } from '@objectiv/tracker-react';

type Props = WrapperProps<typeof FooterType>;

export default function FooterWrapper(props: Props): JSX.Element {
  return (
    <ContentContextWrapper
      id={'blog-post-footer'}>
      <Footer {...props} />
    </ContentContextWrapper>
  );
}
