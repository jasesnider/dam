export const fileExtensionFormatter = (ext: string) => (ext?.toLowerCase().replace('.', ''));

export const getYear = () => {
    const date = new Date();
    return `©${date.getFullYear()}`;
}
