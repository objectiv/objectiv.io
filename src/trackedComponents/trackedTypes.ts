/*
 * Copyright 2021-2022 Objectiv B.V.
 */

import { ComponentType } from 'react';

export type TrackedComponent<T> = T & { Component?: ComponentType<T> };
