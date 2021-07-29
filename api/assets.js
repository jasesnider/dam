import { assetsApiPath, prodAssetsApiPath } from '../constants/api';

export async function getAssets() {
    const assets = await fetch(prodAssetsApiPath)
      .then(data => data.json());

      console.log(assets);

      return assets;
}

export const uploadAsset = async (data) => {
  const formData = new FormData();
  formData.append('files', data);
  console.log(formData)
  fetch(prodAssetsApiPath, {
    method: 'POST',
    body: formData,
  }).then((response) => {
    const result = response.json()
    console.log("result", result)
  }).catch(function (err) {
    console.log("error:");
    console.log(err)
  });
}