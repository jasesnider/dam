import { prodAssetsApiPath } from '../constants/api';
import axios from 'axios';

export const getAssets = async () => await axios.get(prodAssetsApiPath).then(res => res.data);

export const uploadAsset = async (data, setResponse, refreshAssets) => {
  let formData = new FormData();
  formData.append("files", data);
  axios({
    method: "post",
    url: "https://dam-api-vo8le.ondigitalocean.app/upload",
    data: formData
  })
    .then(() => {
      setResponse('Succesfully uploaded');
      refreshAssets();
      // console.log("Succesfully uploaded: ", JSON.stringify(data));
    })
    .catch((error) => {
      console.log("Error: ", error.message);
    });
};