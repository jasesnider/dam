import React from 'react';
import { AssetCard } from '../../components';
import styles from './Assets.module.scss';

type ImageDetails = {
    id: string,
    name: string,
    url: string,
    size: number
  }

interface IProps {
    assets: Array<ImageDetails>
}

const Assets: React.FC<IProps> = ({ assets }) => {
   
    return (
        <div className={styles.cardContainer}>
            {assets.map((asset: ImageDetails) => {
                const {id, name, url, size} = asset;
                return (
                   <AssetCard
                        key={id}
                        id={id}
                        name={name}
                        url={url}
                        size={size}
                   />
                )  
            })
        }
        </div>
    )
}

export default Assets;