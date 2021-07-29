import React, { useState, useEffect} from 'react';
import Head from 'next/head';
import { Nav, Input, Button} from '../components';
import { Assets } from '../containers';
import IImageDetails from '../interfaces/IImageDetails';
import styles from '../styles/Home.module.scss';
import {getAssets, uploadAsset} from '../api/assets';
import InputNotification from '../components/inputs/InputNotification';
import { validateImageType } from '../utils/validations';

export default function Home() {

  const [inputs, setText] = useState<any>({});
  const [showForm, setFormStatus] = useState<boolean>(false);
  const [assets, setAssets] = useState<IImageDetails[]>([]);
  const [filteredAssets, setFilteredAssets] = useState<IImageDetails[]>([]);
  const [fileUpload, setFileUpload] = useState<File>();
  const [invalidText, setInvalidText] = useState<string>('');
  const [apiResponse, setResponse] = useState<string>('');
  
  const getAllAssets = () => {
    getAssets().then(a => {
      const message = a.length ? '': 'No assets found. Try adding some! :)';
      setAssets(a);
      setResponse(message);
      setFilteredAssets(a);
     });
  }

  useEffect(() => {
    setResponse('Loading');
    getAllAssets();
  }, []);

  useEffect(() => {
    if(!!inputs && !!inputs?.search__field) {
      const foundAssets = assets?.filter((asset: IImageDetails) => {
        return asset?.name?.toLowerCase().includes(inputs?.search__field?.toLowerCase());
      });
      setFilteredAssets(foundAssets);
    } else {
      setFilteredAssets(assets);
    }
   
  }, [inputs]);

  useEffect(() => {
    if(apiResponse) {
      setTimeout(function(){ setResponse(''); }, 3000);
    }
  },[apiResponse]);

  const handleInputChange = (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    event.persist();
    const { name, value } = event.currentTarget;
    setText((inputs: Object) => ({ ...inputs, [name]: value }));
  };

  const toggleForm = () => {
    setFormStatus(!showForm);
    setFileUpload(undefined);

  };
  const fileUploadChange = (e: any) => setFileUpload(e?.currentTarget?.files[0]);
  const submitFileUpload = (e: React.FormEvent<HTMLInputElement>): void  => {
    e.preventDefault();

    if(fileUpload) {
      // setInvalidText('');
      const isValidImageType = validateImageType(fileUpload?.type);

      if(isValidImageType) {
        uploadAsset(fileUpload, setResponse, getAllAssets);
        toggleForm();
        console.log('file: ', fileUpload);
      } else {
        setInvalidText('Not a valid image type. Please try again.');
      }
    
    } else {
      setInvalidText('Missing file to upload. Please try again.');    
    } 
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
          <div className="upload-container">
            <Button
              id="toggle-form-button"
              name="simple"
              type="primary"
              title="Upload button"
              label="Upload"
              onClick={toggleForm}
            />
            <div className={styles.uploadFormContainer} data-show-form={showForm}>
              <form>
                {!!invalidText && <InputNotification className={styles.validationNotification} message={invalidText} /> }
                <input id="file-upload" className={styles.fileUpload} type="file" onChange={fileUploadChange}/>
                <input id="submit-upload-button" className={styles.submitButton} onClick={submitFileUpload} type="submit" value="Submit" />
              </form>
            </div>
          </div>
        </div>
        {apiResponse && <div className={styles.notifications}>{apiResponse}</div>}
        <Assets assets={filteredAssets} />      
      </main>

      <footer className={styles.footer}>
        
          2021 Digital Asset Management System. All Rights Reserved.
      
      </footer>
    </div>
  )
};
