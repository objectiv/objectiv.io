/*
 * Copyright 2021-2022 Objectiv B.V.
 */

/**
 * High order function to execute the given function once
 */
export const executeOnce = (f) => {
  let executed = false;
  return (...args) => {
    if (!executed) {
      executed = true;
      f(...args);
    }
  };
};
