export function convertToUnderscoreFormat(inputString: string): string {
    return inputString.replace(/ /g, '_');
}

export function convertToSpaceFormat(inputString: string): string {
    return inputString.replace(/_/g, ' ');
}

export default function convertDate(inputDate: string) {
    const date = new Date(inputDate);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = String(date.getFullYear());
    return `${day}.${month}.${year}`;
}

export function convertBlogArticleTitle(title: string): string {
    return title.replace(/\s\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.\d+/g, '');
}

export function  convertBlogArticleBody(body: string): string {
    return body.replace(/[{}]/g, '');
}