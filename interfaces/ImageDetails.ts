import Upload from './Upload';

export default interface ImageDetails {
    id: string,
    assetId: string,
    name: string,
    description: string,
    published_at: string,
    created_at: string,
    updated_at: string,
    upload: Upload
  }
