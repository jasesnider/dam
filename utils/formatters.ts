import IImageDetails from "../interfaces/IImageDetails";

export const fileExtensionFormatter = (ext: string) => (ext?.toLowerCase().replace('.', ''));

export const getYear = () => {
    const date = new Date();
    return `©${date.getFullYear()}`;
}

export const pluralise = (word: string, count: number) => {
    return `${word}${count === 1 ? '': 's'}`;
};