import React, { useState, useEffect} from 'react';
import Head from 'next/head';
import { Nav, Input, Button} from '../components';
import { Assets } from '../containers';
import IImageDetails from '../interfaces/IImageDetails';
import styles from '../styles/Home.module.scss';
import {getAssets, uploadAsset} from '../api/assets';
import InputNotification from '../components/inputs/InputNotification';
import { validateImageType } from '../utils/validations';
import { getYear } from '../utils/formatters';
import { invalidImageType, missingFile, noAssetsFound, emptyString, loading } from '../constants/content';

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
      const message = a.length ? emptyString: noAssetsFound;
      setAssets(a);
      setResponse(message);
      setFilteredAssets(a);
     });
  }

  const clearForm = () => {
    setText({...inputs, file__name__field: emptyString, caption__field: emptyString});
    setFileUpload(undefined);
  }

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
      const {file__name__field, caption__field, image__alt__text__field} = inputs;
      const isValidImageType = validateImageType(fileUpload?.type);

      if(isValidImageType) {
        uploadAsset(
          file__name__field, 
          caption__field, 
          // image__alt__text__field, 
          fileUpload, 
          setResponse,
          clearForm,
          getAllAssets
        );
        toggleForm();
      } else {
        setInvalidText(invalidImageType);
      }
    
    } else {
      setInvalidText(missingFile);    
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
            <div className={styles.uploadFormContainer} data-show-form={showForm}>
              <form className={styles.uploadForm}>
                {!!invalidText && <InputNotification className={styles.validationNotification} message={invalidText} /> }
                <Input
                  id="file__name__text__field"
                  className="file-name-field"
                  label="File Name"
                  name="file__name__field"
                  value={inputs["file__name__field"]}
                  type="text"
                  placeholder="Enter file name... "
                  onChange={handleInputChange}
                />
                <Input
                  id="caption__text__field"
                  className="caption-field"
                  label="Caption"
                  name="caption__field"
                  value={inputs["caption__field"]}
                  type="textarea"
                  placeholder="Enter caption... "
                  onChange={handleInputChange}
                />
                 {/* <Input
                  id="image__alt__text__field"
                  className="image-alt-text-field"
                  label="Image Alt Text"
                  name="image__alt__text__field"
                  value={inputs["image__alt__text__field"]}
                  type="text"
                  required
                  placeholder="Enter alt text... "
                  onChange={handleInputChange}
                /> */}
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
        
          {getYear()} Digital Asset Management System. All Rights Reserved.
      
      </footer>
    </div>
  )
};
