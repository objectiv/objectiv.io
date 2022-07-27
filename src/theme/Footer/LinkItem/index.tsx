import useBaseUrl from "@docusaurus/useBaseUrl";
import { makeIdFromString } from '@objectiv/tracker-core';
import type LinkItemType from '@theme/Footer/LinkItem';
import React, { ComponentProps } from 'react';
import { TrackedLink } from "../../../objectiv/TrackedLink";

type Props = ComponentProps<typeof LinkItemType>;

export default function LinkItemWrapper(props: Props): JSX.Element {
  const {item} = props;
  const normalizedTo = useBaseUrl(item.to, {forcePrependBaseUrl: true});

  return (
    <TrackedLink
      className="footer__link-item"
      id={makeIdFromString(item.label)}
      to={normalizedTo}
      {...props}
    >
      {item.label}
    </TrackedLink>
  );
}
