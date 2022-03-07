import clsx from 'clsx';
import React from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

function IconHeader({title, subTitle=null, icon=null}) {
  return (
    <div className={clsx("icon-header", styles.iconHeader)}>
      {icon && (
        <img 
          src={useBaseUrl("img/icons/" + icon + ".svg")} 
          alt="Icon" />
      )}
      <h2
        // Developer provided the HTML, so assume it's safe.
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{
          __html: title,
        }}
      />
      {subTitle && (
        <p
          // Developer provided the HTML, so assume it's safe.
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{
            __html: subTitle,
          }}
        />
      )}
    </div>
  );
}

export default IconHeader;
