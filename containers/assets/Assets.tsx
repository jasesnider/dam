import React from 'react';
import { AssetCard } from '../../components';
import IImageDetails from '../../interfaces/IImageDetails';
import styles from './Assets.module.scss';
import { prodApiPath } from '../../constants/api';

interface IProps {
    assets: Array<IImageDetails>
}

const Assets: React.FC<IProps> = ({ assets }) => {
   
    return (
        <div className={styles.cardContainer}>
            {assets.map((asset: IImageDetails) => {
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