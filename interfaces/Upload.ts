export default interface Upload {
    id: string,
    name: string,
    alternativeText: string,
    caption: string,
    width: number,
    height: number,
    ext: string,
    size: number,
    url: string
    formats: {
        thumbnail: {
        width: number,
        height: number,
        url: string
        }
    }
}