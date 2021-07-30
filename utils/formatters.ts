export const fileExtensionFormatter = (ext: string) => (ext.replace('.', ''));

export const getYear = () => {
    const date = new Date();
    return `©${date.getFullYear()}`;
}
