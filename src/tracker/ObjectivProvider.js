import React, { createContext, useCallback } from 'react';
import { useInstance } from './useInstance';
import { Deferred } from './Deferred';

export const ObjectivContext = createContext({
  tracker: null,
  getDeferredContext() {
    throw new Error('need objectiv provider');
  },
});

export const ObjectivProvider = ({ tracker, children }) => {
  const deferredContexts = useInstance(new Map());

  const getDeferredContext = useCallback(
    (schema) => {
      if (deferredContexts.has(schema)) {
        return deferredContexts.get(schema);
      }

      const deferred = new Deferred();
      deferredContexts.set(schema, deferred);
      return deferred;
    },
    [deferredContexts]
  );

  return <ObjectivContext.Provider value={{ tracker, getDeferredContext }}>{children}</ObjectivContext.Provider>;
};
