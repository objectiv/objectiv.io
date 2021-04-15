import React from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

function IconHeader({children, iconName, title, subTitle, description}) {
  return (
    <div>
      {subTitle && <div className={styles.subTitle}><h3>{subTitle}</h3></div>}
      <div className={styles.titleWrapper}>
        <div className={styles.icon}>
          <img src={useBaseUrl('img/icons/icon-'+iconName+'.svg')} alt={iconName+" icon"} />
        </div>
        <div className={styles.title}>
          <h2>{title}</h2>
          {description && <div class={styles.description}>{description}</div>}
        </div>
      </div>
    </div>
  );
}

export default IconHeader;
