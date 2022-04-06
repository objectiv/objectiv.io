import React, { useEffect, useState } from "react";
import useBaseUrl from '@docusaurus/useBaseUrl';
import clsx from "clsx";
import { TrackedDiv } from "@objectiv/tracker-react";
import styles from "./styles.module.css";

export default function BeforeAfterImage({
  id,
  beforeImageUrl,
  afterImageUrl,
  beforeImageMobileUrl = null,
  afterImageMobileUrl = null,
  caption = '',
  tabColorsInverted = false
}) {
  const [activeTab, setActiveTab] = useState('before');
  function toggleActiveTab() {
    setActiveTab(activeTab == 'before' ? 'after' : 'before');
  }

  // let intervalId;
  // function autoSwitchTab(milliSecondsBetween = 5000) {
  //   console.log("Starting auto-switch every " + milliSecondsBetween + "ms");
  //   intervalId = setInterval(() => toggleActiveTab(), milliSecondsBetween);
  //   console.log("intervalId: " + intervalId);
  // }
  // // TODO: stop switching on hover, restart on hover out
  // function toggleAutoSwitch() {
  //   if (intervalId != null) {
  //     console.log("Clearing interval", intervalId);
  //     clearInterval(intervalId);
  //   } else {
  //     autoSwitchTab(5000);
  //   }
  // }
  // // TODO: switch tabs every x seconds
  // useEffect(() => {
  //   console.log("intervalId at start: " + intervalId);
  //   if(!intervalId) autoSwitchTab(5000); // can't be 4000 or lower, because fade out/in length is 2s + 2s wait time.
  // }, [])

  beforeImageMobileUrl = beforeImageMobileUrl ?? beforeImageUrl;
  afterImageMobileUrl = afterImageMobileUrl ?? afterImageUrl;

  return (
    <TrackedDiv id={id + '-before-after'} 
      className={clsx(styles.beforeAfter, styles.beforeAfterDesktop)} 
      // onMouseEnter={toggleAutoSwitch}
      // onMouseLeave={toggleAutoSwitch}
      >
      <div className={clsx(styles.beforeAfterTabs, 
        tabColorsInverted && styles.beforeAfterTabsInverted)}>
        <button 
          id='before'
          className={clsx(styles.beforeAfterTab, 
            activeTab == 'before' ? styles.beforeAfterTabActive : styles.beforeAfterTabInactive)}
          onClick={toggleActiveTab}>
          BEFORE
        </button>
        <button 
          id='after'
          className={clsx(styles.beforeAfterTab, 
            activeTab == 'after' ? styles.beforeAfterTabActive : styles.beforeAfterTabInactive)}
          onClick={toggleActiveTab}>
          AFTER
        </button>
      </div>
      <div 
        className={clsx(styles.switch, 
          activeTab == 'before' 
            ? styles.beforeAfterBefore 
            : styles.beforeAfterHidden)}>
        <img
          src={useBaseUrl(beforeImageUrl)}
          className={clsx(styles.imgDesktop, activeTab == 'before' ? styles.fadeIn : styles.fadeOut)} 
          alt="Workflow before Objectiv" />
        <img
          src={useBaseUrl(beforeImageMobileUrl)} 
          className={clsx(styles.imgMobile, activeTab == 'before' ? styles.fadeIn : styles.fadeOut)} 
          alt="Workflow before Objectiv" />
      </div>
      <div 
        className={clsx(styles.switch, 
          activeTab == 'after' 
            ? styles.beforeAfterAfter 
            : styles.beforeAfterHidden)}>
        <img
          src={useBaseUrl(afterImageUrl)}
          className={clsx(styles.imgDesktop, activeTab == 'after' ? styles.fadeIn : styles.fadeOut)} 
          alt="Workflow after Objectiv" />
        <img
          src={useBaseUrl(afterImageMobileUrl)}
          className={clsx(styles.imgMobile, activeTab == 'after' ? styles.fadeIn : styles.fadeOut)} 
          alt="Workflow after Objectiv" />
      </div>
      {caption && <p><em>{caption}</em></p>}
    </TrackedDiv>
  );
}
