import React, { useState, useEffect} from 'react';
import Head from 'next/head';
import { Nav, Input } from '../components';
import { Assets, UploadButton } from '../containers';
import ImageDetails from '../interfaces/ImageDetails';
import styles from '../styles/Home.module.scss';
import {getAssets} from '../api/assets';

export default function Home() {

  const [inputs, setText] = useState<any>({});
  const [assets, setAssets] = useState<ImageDetails[]>([]);
  const [filteredAssets, setFilteredAssets] = useState<ImageDetails[]>([]);

  useEffect(() => {
     getAssets().then(a => {
      setAssets(a);
      setFilteredAssets(a);
     });
  }, []);

  useEffect(() => {
    if(!!inputs && !!inputs?.search__field) {
      const foundAssets = assets?.filter((asset: ImageDetails) => {
      const {name, description} = asset;
      const joinedSearchCriteria = `${name}${description}`;
        return joinedSearchCriteria.toLowerCase().includes(inputs?.search__field?.toLowerCase());
      });
      setFilteredAssets(foundAssets);
    } else {
      setFilteredAssets(assets);
    }
   
  }, [inputs]);

  const handleInputChange = (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    event.persist();
    const { name, value } = event.currentTarget;
    setText((inputs: Object) => ({ ...inputs, [name]: value }));
  };

  const uploadImage = () =>  {
    // fetch('/api/asset/7', {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify({ name: 'Image 7', url: 'Image 7', size: 7000}),
    //   });
  // setAssets([...assets, { id: '7', name: 'Image 7', url: 'Image 7', size: 7000}]);
    
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Digital Asset Management System</title>
        <meta name="description" content="A simple Digital Asset Management System" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Nav />
        <div className={styles.subnav}>
          <Input
            id="search__text__field"
            className="search-field"
            label="Search Field"
            name="search__field"
            value={inputs["search__field"]}
            type="text"
            placeholder="Enter search criteria"
            hideLabel={true}
            onChange={handleInputChange}
          />
          <UploadButton onClick={uploadImage} />
        </div>
        <Assets assets={filteredAssets} />      
      </main>

      <footer className={styles.footer}>
        
          2021 Digital Asset Management System. All Rights Reserved.
      
      </footer>
    </div>
  )
};
