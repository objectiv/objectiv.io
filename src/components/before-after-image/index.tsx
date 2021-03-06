import React, { useEffect, useState, useRef } from "react";
import useBaseUrl from '@docusaurus/useBaseUrl';
import clsx from "clsx";
import { TrackedDiv, TrackedButton } from "@objectiv/tracker-react";
import styles from "./styles.module.css";

export default function BeforeAfterImage({
  id,
  beforeImageUrl,
  afterImageUrl,
  beforeImageMobileUrl,
  afterImageMobileUrl,
  captionBefore = '',
  captionAfter = '',
  tabColorsInverted = false
}) {

  const [activeTab, setActiveTab] = useState('before');

  function toggleActiveTab() {
    setActiveTab(activeTab == 'before' ? 'after' : 'before');
  }

  const [isRunning, setIsRunning] = useState(true);

  function handleRunningChange(e) {
    setIsRunning(!isRunning);
  }

  return (
    <TrackedDiv id={id + '-before-after'} 
      className={clsx(styles.beforeAfter, styles.beforeAfterDesktop)} 
      onMouseEnter={handleRunningChange}
      onMouseLeave={handleRunningChange}>
      <div className={clsx(styles.beforeAfterTabs, 
        tabColorsInverted && styles.beforeAfterTabsInverted)}>
        <TrackedButton 
          id='before'
          className={clsx(styles.beforeAfterTab, 
            activeTab == 'before' ? styles.beforeAfterTabActive : styles.beforeAfterTabInactive)}
          onClick={toggleActiveTab}>
          BEFORE
        </TrackedButton>
        <TrackedButton 
          id='after'
          className={clsx(styles.beforeAfterTab, 
            activeTab == 'after' ? styles.beforeAfterTabActive : styles.beforeAfterTabInactive)}
          onClick={toggleActiveTab}>
          AFTER
        </TrackedButton>
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
      <div 
        className={clsx(
          activeTab == 'before' 
            ? styles.beforeAfterBefore 
            : styles.beforeAfterHidden)}>
        <p className={clsx(activeTab == 'before' ? styles.fadeIn : styles.fadeOut)}>
          <em>{captionBefore}</em>
        </p>
      </div>
      <div 
        className={clsx(
          activeTab == 'after' 
            ? styles.beforeAfterBefore 
            : styles.beforeAfterHidden)}>
        <p className={clsx(activeTab == 'after' ? styles.fadeIn : styles.fadeOut)}>
          <em>{captionAfter}</em>
        </p>
      </div>
    </TrackedDiv>
  );
}
