import React, { useState, useEffect} from 'react';
import Head from 'next/head';
import { Nav, Input } from '../components';
import { Assets, UploadButton } from '../containers';
import styles from '../styles/Home.module.scss';

interface ImageDetails {
  id: string,
  name: string,
  url: string,
  size: number
}

function getAssets() {
  return fetch('http://localhost:3000/api/assets')
    .then(data => data.json())
}

export default function Home() {

  const [inputs, setText] = useState<any>({});
  const [assets, setAssets] = useState<ImageDetails[]>([]);

  useEffect(() => {
     getAssets().then(a => setAssets(a));
    }, []);

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
  setAssets([...assets, { id: '7', name: 'Image 7', url: 'Image 7', size: 7000}]);
    
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
        <h1 className={styles.title}>
          Digital Asset Management System
        </h1>
        <Input
          id="input__text__field"
          label="Search Field"
          name="search__field"
          value={inputs["search__field"]}
          type="text"
          placeholder="Enter search criteria"
          onChange={handleInputChange}
      />
      <UploadButton onClick={uploadImage} />
        <Assets assets={assets} />      
      </main>

      <footer className={styles.footer}>
        
          2021 Digital Asset Management System. All Rights Reserved.
      
      </footer>
    </div>
  )
};
