import axios from 'axios';

import { prodApiPath, prodAssetsApiPath } from '../constants/api';
import { successfulUploadMessage } from '../constants/content';

export const getAssets = async () => await axios.get(prodAssetsApiPath).then(res => res.data);

export const uploadAsset = async (
    name: string, 
    caption: string,
    // alternativeText: string,
    file: File, 
    setResponse: Function, 
    refreshAssets: Function
  ) => {

  const postData = {
    name, 
    description: caption,
  };

  let formData = new FormData();

  formData.append('files.upload', file);
  // formData.append('upload.alternativeText', alternativeText)
  formData.append('data', JSON.stringify(postData))

  axios({
    method: "post",
    url: `${prodApiPath}/assets`, 
    data: formData
  })
    .then(() => {
      setResponse(successfulUploadMessage);
      refreshAssets();
    })
    .catch((error) => {
      console.log("Error: ", error.message);
    });
};