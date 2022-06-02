import { makeIdFromString } from '@objectiv/tracker-core';
import type LinkItemType from '@theme/Footer/LinkItem';
import React, { ComponentProps } from 'react';
import { TrackedLink } from "../../../trackedComponents/TrackedLink";

type Props = ComponentProps<typeof LinkItemType>;

export default function LinkItemWrapper(props: Props): JSX.Element {
  const {item} = props;
  const label = makeIdFromString(item.label);

  return (
    <TrackedLink
      className="footer__link-item"
      id={label}
      to={item.to}
      {...props}
    >
      {item.label}
    </TrackedLink>
  );
}
