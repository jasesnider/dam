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
                    const {id, name, ext, url, formats } = asset;

                    const thumbnail = formats?.thumbnail?.url || url;
                    const thumbnailUrl = `${prodApiPath}${thumbnail}`;
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
        </>
    )
}

export default Assets;