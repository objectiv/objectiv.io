import { useRef } from 'react';

export function useInstance(value) {
  const ref = useRef(value);
  return ref.current;
}
