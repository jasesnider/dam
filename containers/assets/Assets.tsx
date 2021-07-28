import React from 'react';
import { AssetCard } from '../../components';
import ImageDetails from '../../interfaces/ImageDetails';
import styles from './Assets.module.scss';
import { apiPath } from '../../constants/api';

interface IProps {
    assets: Array<ImageDetails>
}

const Assets: React.FC<IProps> = ({ assets }) => {
   
    return (
        <div className={styles.cardContainer}>
            {assets.map((asset: ImageDetails) => {
                const {assetId, name, description, upload } = asset;
                const thumbnailUrl = `${apiPath}${upload.formats.thumbnail.url}`;
                const imageUrl = `${apiPath}${upload.url}`;

                return (
                   <AssetCard
                        key={assetId}
                        name={name}
                        description={description}
                        url={imageUrl}
                        thumbnailUrl={thumbnailUrl}
                        ext={upload.ext}
                   />
                )  
            })
        }
        </div>
    )
}

export default Assets;