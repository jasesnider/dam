import Formats from './Formats';

export default interface ImageDetails {
    id: string,
    name: string,
    published_at: string,
    created_at: string,
    updated_at: string,
    ext: string,
    url: string,
    formats: Formats
  }
