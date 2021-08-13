export function removeHTMLFromString(inputString: string): string {
    return inputString.replace(/<\/?[^>]+(>|$)/g, "")
}