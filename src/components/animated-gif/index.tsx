import React, { useEffect, useRef, useState } from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

export const windowExists = () => typeof window !== 'undefined';

function useOnScreen(ref) {
  // Skip if we are in SSR
  if (!windowExists()) {
    return;
  }
  const [isIntersecting, setIntersecting] = useState(false);
  const observer = new IntersectionObserver(
    ([entry]) => setIntersecting(entry.isIntersecting)
  )

  useEffect(() => {
    observer.observe(ref.current);
    // Remove the observer as soon as the component is unmounted
    return () => { 
      observer.disconnect(); 
    }
  }, [])

  return isIntersecting;
}

function AnimatedGif({
  url,
  stillUrl = '',
  alt = '',
}) {
  const ref = useRef();
  const isVisible = useOnScreen(ref);

  let imgSrc = url;
  if(!isVisible) { 
    // set image to a still
    imgSrc = stillUrl ? stillUrl : url;
  }
  if(isVisible) { 
    // set image to its animated variant; make sure to reload it by adding a hash
    imgSrc = url + '?' + Date.now();
  }
  
  return (
    <div ref={ref}>
      <img
        src={imgSrc}
        alt={alt}
        className={clsx(styles.exampleAnimatedGif)} />
    </div>
  );
}

export default AnimatedGif;