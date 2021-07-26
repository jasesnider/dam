import React, { useEffect, useState } from 'react';
import { AssetCard } from '../../components';
import styles from './Assets.module.scss';

function getAssets() {
    return fetch('http://localhost:3000/api/assets')
      .then(data => data.json())
}

interface ImageDetails {
    id: string,
    name: string,
    url: string,
    size: number
}

function Assets() {
    const [assets, setAssets] = useState<any>([]);

    useEffect(() => {
       getAssets().then(a => setAssets(a));
      }, [assets]);

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