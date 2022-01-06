import clsx from 'clsx';
import React from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

function IconHeader({title, icon}) {
  return (
    <div>
      <img 
        src={useBaseUrl("img/icons/" + icon + ".svg")} 
        className={clsx(styles.whyObjectiv)}
        alt="Icon" />
      <h2 className={clsx(styles.iconHeader)}>
        {title}
      </h2>
    </div>
  );
}

export default IconHeader;
