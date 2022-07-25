import React from 'react';
import Container from '@theme-original/BlogPostItem/Container';
import type ContainerType from '@theme/BlogPostItem/Container';
import type {WrapperProps} from '@docusaurus/types';
import {useBlogPost} from '@docusaurus/theme-common/internal';
import { ContentContextWrapper } from '@objectiv/tracker-react';
import { makeIdFromString } from '@objectiv/tracker-core';

type Props = WrapperProps<typeof ContainerType>;

export default function ContainerWrapper(props: Props): JSX.Element {
  const { frontMatter } = useBlogPost();
  const title = frontMatter.title;
  return (
    <ContentContextWrapper id={`post-${makeIdFromString(title)}`}>
      <Container {...props} />
    </ContentContextWrapper>
  );
}
