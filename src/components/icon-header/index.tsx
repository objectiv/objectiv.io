import clsx from 'clsx';
import React from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

function IconHeader({title, icon}) {
  return (
    <div className={clsx(styles.iconHeader)}>
      <img 
        src={useBaseUrl("img/icons/" + icon + ".svg")} 
        alt="Icon" />
      <h2>
        {title}
      </h2>
    </div>
  );
}

export default IconHeader;
