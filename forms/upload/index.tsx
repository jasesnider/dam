import React, { useState }from 'react';
import styles from './UploadForm.module.scss';
import { invalidImageType, missingFile, emptyString } from '../../constants/content';
import { validateImageType } from '../../utils/validations';
import InputNotification from '../../components/inputs/InputNotification';
import { Input } from '../../components';
import { uploadAsset } from '../../api/assets';

interface IProps {
    inputs: any,
    setText: Function,
    setResponse: Function,
    getAllAssets: Function,
    toggleForm: Function,
    handleInputChange: any
}

const UploadForm: React.FC<IProps> = ({ inputs, setText, setResponse, getAllAssets, toggleForm, handleInputChange }) => {

    const [invalidText, setInvalidText] = useState<string>('');
    const [fileUpload, setFileUpload] = useState<File>();

    const clearForm = () => {
        setText({...inputs, file__name__field: emptyString, caption__field: emptyString});
        setFileUpload(undefined);
      }

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
    <div className={styles.uploadFormContainer}>
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
)
}

export default UploadForm;