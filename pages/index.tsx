import React, { useState, useEffect} from 'react';
import Head from 'next/head';
import { Nav, Input, Button } from '../components';
import { Assets } from '../containers';
import IImageDetails from '../interfaces/IImageDetails';
import styles from '../styles/Home.module.scss';
import { getAssets } from '../api/assets';
import { getYear } from '../utils/formatters';
import { noAssetsFound, emptyString, loading } from '../constants/content';
import UploadForm from '../forms/upload';

export default function Home() {

  const [inputs, setText] = useState<any>({});
  const [showForm, setFormStatus] = useState<boolean>(false);
  const [assets, setAssets] = useState<IImageDetails[]>([]);
  const [filteredAssets, setFilteredAssets] = useState<IImageDetails[]>([]);
  const [apiResponse, setResponse] = useState<string>('');
  
  const getAllAssets = () => {
    getAssets().then(a => {
      const message = a.length ? emptyString: noAssetsFound;
      setAssets(a);
      setResponse(message);
      setFilteredAssets(a);
     });
  }

  const handleInputChange = (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
    ) => {
    event.persist();
    const { name, value } = event.currentTarget;
    setText((inputs: Object) => ({ ...inputs, [name]: value }));
};

  useEffect(() => {
    setResponse(loading);
    getAllAssets();
  }, []);

  useEffect(() => {
    if(!!inputs && !!inputs?.search__field) {
      const foundAssets = assets?.filter((asset: IImageDetails) => {
        const joinedSearchCriteria = `${asset.name}${asset.description}`;
        return joinedSearchCriteria.toLowerCase().includes(inputs?.search__field?.toLowerCase());
      });
      setFilteredAssets(foundAssets);
    } else {
      setFilteredAssets(assets);
    }
   
  }, [inputs]);

  useEffect(() => {
    if(apiResponse) {
      setTimeout(function(){ setResponse(emptyString); }, 3000);
    }
  },[apiResponse]);

  const toggleForm = () => {
    setFormStatus(!showForm);
  };

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
            placeholder="Search images... "
            hideLabel={true}
            onChange={handleInputChange}
          />
          <div className="upload-wrapper">
            <Button
              id="toggle-form-button"
              name="simple"
              type="primary"
              title="Upload button"
              label="Upload"
              onClick={toggleForm}
            />
       {showForm && <UploadForm inputs={inputs} handleInputChange={handleInputChange} setText={setText} setResponse={setResponse} toggleForm={toggleForm} getAllAssets={getAllAssets} />}
          </div>
        </div>
        {apiResponse && <div className={styles.notifications}>{apiResponse}</div>}
        <Assets assets={filteredAssets} />      
      </main>

      <footer className={styles.footer}>
        
          {getYear()} Digital Asset Management System. All Rights Reserved.
      
      </footer>
    </div>
  )
};
