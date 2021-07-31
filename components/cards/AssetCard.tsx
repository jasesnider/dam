import React from 'react';
import styles from './AssetCard.module.scss';
import { fileExtensionFormatter } from '../../utils/formatters';

interface IProps {
    name: string;
    description: string;
    imageUrl: string;
    thumbnailUrl: string;
    upload: any
  }

const AssetCard: React.FC<IProps> = ({ name, imageUrl, description, thumbnailUrl, upload }) => {
    const style = {
        backgroundImage: `url(${thumbnailUrl})`,
    }
    
    const formattedExt = fileExtensionFormatter(upload.ext);

return (
    <div className={styles.card}>
        <div className={styles.image} style={style}></div>
        <div className={styles.content}>
            <h2 className={styles.name}>
                <a href={imageUrl} target="_blank" rel="noreferrer">{name}</a>
            </h2>
            <div className={styles.description}>{description}</div>
            <span className={styles.extension} data-ext={formattedExt}>
                {formattedExt}
            </span>
        </div>
    </div>
    )
};

export default AssetCard;