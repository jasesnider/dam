import React from 'react';
import styles from './AssetCard.module.scss';

interface IProps {
    id: string;
    name: string;
    url: string;
    size: number;
  }

const AssetCard: React.FC<IProps> = ({id, name, url, size}) => {
return (
    <div className={styles.card}>
        <span>{id}</span>
        <span>{name}</span>
        <span>{url}</span>
        <span>{size}</span>
    </div>
    )
};

export default AssetCard;