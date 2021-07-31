import React from 'react';
import { AssetCard } from '../../components';
import IImageDetails from '../../interfaces/IImageDetails';
import styles from './Assets.module.scss';
import { prodApiPath } from '../../constants/api';
import { pluralise } from '../../utils/formatters';

interface IProps {
    assets: Array<IImageDetails>
}

const Assets: React.FC<IProps> = ({ assets }) => {

    const assetCount = assets?.length; 
    return (
        <>
            <div className={styles.assetCount}>{`${assetCount} ${pluralise('Asset', assetCount)}`}</div>
            <div className={styles.cardContainer}>
            
                {assets.map((asset: IImageDetails) => {
                    const {id, name, description, upload } = asset;

                    const thumbnail = upload?.formats?.thumbnail?.url || upload?.url;
                    const thumbnailUrl = `${prodApiPath}${thumbnail}`;
                    const imageUrl = `${prodApiPath}${upload?.url}`;
                    return (
                    <AssetCard
                        key={id}
                        name={name}
                        description={description}
                        imageUrl={imageUrl}
                        thumbnailUrl={thumbnailUrl}
                        upload={upload}
                    />
                    )  
                })
            }
            </div>
        </>
    )
}

export default Assets;