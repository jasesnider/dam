import React from 'react';
import styles from './AssetCard.module.scss';
import { fileExtensionFormatter } from '../../utils/formatters';

interface IProps {
    name: string;
    thumbnailUrl: string;
    url: string
    ext: string
  }

const AssetCard: React.FC<IProps> = ({ name, thumbnailUrl, url, ext }) => {
    const style = {
       
        backgroundImage: `url(${thumbnailUrl})`,
    }

    const formattedExt = fileExtensionFormatter(ext);

return (
    <div className={styles.card}>
        <div className={styles.image} style={style}></div>
        <div className={styles.content}>
            <h2 className={styles.name}><a href={url} target="_blank" rel="noreferrer">{name}</a></h2>
            <span className={styles.extension} data-ext={formattedExt}>
                {formattedExt}
            </span>
        </div>
    </div>
    )
};

export default AssetCard;