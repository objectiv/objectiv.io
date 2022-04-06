import React, { useState } from "react";
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
  caption = ''
}) {
  const [activeTab, setActiveTab] = useState('before');
  function toggleActiveTab(e) {
    setActiveTab(e.target.id);
  }

  beforeImageMobileUrl = beforeImageMobileUrl ?? beforeImageUrl;
  afterImageMobileUrl = afterImageMobileUrl ?? beforeImageUrl;

  return (
    <>
      {/* DESKTOP VERSION */}
      <TrackedDiv id={id + '-before-after'} className={clsx(styles.beforeAfter, styles.beforeAfterDesktop)}>
        <div className={clsx(styles.beforeAfterTabs)}>
          <button 
            id='before'
            className={clsx(styles.beforeAfterTab, 
              activeTab == 'before' ? styles.beforeAfterTabActive : styles.beforeAfterTabInactive)}
            onClick={toggleActiveTab}>
            BEFORE OBJECTIV
          </button>
          <button 
            id='after'
            className={clsx(styles.beforeAfterTab, 
              activeTab == 'after' ? styles.beforeAfterTabActive : styles.beforeAfterTabInactive)}
            onClick={toggleActiveTab}>
            AFTER OBJECTIV
          </button>
        </div>
        <div 
          className={clsx(styles.switch, 
            activeTab == 'before' 
              ? styles.beforeAfterBefore 
              : styles.beforeAfterHidden)}>
          <img
            src={useBaseUrl(beforeImageUrl)}
            className={clsx(activeTab == 'before' ? styles.fadeIn : styles.fadeOut)} 
            alt="Workflow before Objectiv" />
        </div>
        <div 
          className={clsx(styles.switch, 
            activeTab == 'after' 
              ? styles.beforeAfterAfter 
              : styles.beforeAfterHidden)}>
          <img
            src={useBaseUrl(afterImageUrl)}
            className={clsx(activeTab == 'after' ? styles.fadeIn : styles.fadeOut)} 
            alt="Workflow after Objectiv" />
        </div>
        {caption && <p><em>{caption}</em></p>}
      </TrackedDiv>

      {/* TODO: MOBILE VERSION */}
      <TrackedDiv id={id + '-before-after'} className={clsx(styles.beforeAfter, styles.beforeAfterMobile)}>
        <div>
          <img
            src={useBaseUrl(beforeImageMobileUrl)} 
            alt="Workflow before Objectiv" />
        </div>
        <div>
          <img
            src={useBaseUrl(afterImageMobileUrl)}
            alt="Workflow after Objectiv" />
        </div>
      </TrackedDiv>
    </>
  );
}
