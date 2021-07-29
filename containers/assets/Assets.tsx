import React from 'react';
import { AssetCard } from '../../components';
import ImageDetails from '../../interfaces/ImageDetails';
import styles from './Assets.module.scss';
import { prodApiPath } from '../../constants/api';

interface IProps {
    assets: Array<ImageDetails>
}

const Assets: React.FC<IProps> = ({ assets }) => {
   
    return (
        <div className={styles.cardContainer}>
            {assets.map((asset: ImageDetails) => {
                const {id, name, ext, url, formats } = asset;
                const thumbnailUrl = `${prodApiPath}${formats.thumbnail.url}`;
                const imageUrl = `${prodApiPath}${url}`;
                return (
                   <AssetCard
                        key={id}
                        name={name}
                        url={imageUrl}
                        thumbnailUrl={thumbnailUrl}
                        ext={ext}
                   />
                )  
            })
        }
        </div>
    )
}

export default Assets;