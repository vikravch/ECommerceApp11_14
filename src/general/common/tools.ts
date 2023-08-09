export function convertToUnderscoreFormat(inputString: string): string {
    return inputString.replace(/ /g, '_');
}

export function convertToSpaceFormat(inputString: string): string {
    return inputString.replace(/_/g, ' ');
}