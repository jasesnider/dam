import { assetsApiPath } from '../constants/api';

export async function getAssets() {
    const assets = await fetch(assetsApiPath)
      .then(data => data.json());

      return assets;
}