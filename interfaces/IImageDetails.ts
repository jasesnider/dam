import IFormats from './IFormats';

export default interface IImageDetails {
    id: string,
    name: string,
    description: string,
    published_at: string,
    created_at: string,
    updated_at: string,
    upload: {
      ext: string,
      url: string,
      formats: IFormats
    }
  }
