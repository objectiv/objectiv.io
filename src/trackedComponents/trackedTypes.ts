/*
 * Copyright 2021-2022 Objectiv B.V.
 */

import React from 'react';

export type TrackedComponent<T> = T & { Component?: React.ComponentType<T> | keyof React.ReactHTML };

export type TrackedDivProps = React.HTMLAttributes<HTMLDivElement> & {
  id: string;
  forwardId?: boolean;
};
