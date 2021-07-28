import React from 'react';
import styles from './AssetCard.module.scss';
import { fileExtensionFormatter } from '../../utils/formatters';

interface IProps {
    name: string;
    description: string;
    thumbnailUrl: string;
    url: string
    ext: string
  }

const AssetCard: React.FC<IProps> = ({ name, description, thumbnailUrl, url, ext }) => {

    const style = {
        background: `url(${thumbnailUrl})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
    }

    const formattedExt = fileExtensionFormatter(ext);

return (
    <div className={styles.card}>
        <div className={styles.image} style={style}></div>
        <div className={styles.content}>
            <h2 className={styles.name}><a href={url} target="_blank">{name}</a></h2>
            <div className={styles.description}>{description}</div>
            <span className={styles.extension}>
                {formattedExt}
            </span>
        </div>
    </div>
    )
};

export default AssetCard;