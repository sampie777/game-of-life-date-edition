import {locale} from "./locale";

export function format(date: Date | string, format: string) {
    if (typeof date === "string") {
        date = new Date(date);
    }
    return format
        .replace(/%dd/g, date.getDate().toString().padStart(2, '0'))
        .replace(/%d/g, date.getDate().toString())
        .replace(/%mmmm/g, locale.en.constants.date.months[date.getMonth()])
        .replace(/%mmm/g, locale.en.constants.date.months_short[date.getMonth()])
        .replace(/%mm/g, (date.getMonth() + 1).toString().padStart(2, '0'))
        .replace(/%m/g, (date.getMonth() + 1).toString())
        .replace(/%YYYY/g, date.getFullYear().toString())
        .replace(/%YY/g, (date.getFullYear() % 100).toString())
        .replace(/%Y/g, date.getFullYear().toString())
        .replace(/%HH/g, date.getHours().toString().padStart(2, '0'))
        .replace(/%H/g, date.getHours().toString())
        .replace(/%MM/g, date.getMinutes().toString().padStart(2, '0'))
        .replace(/%M/g, date.getMinutes().toString())
        .replace(/%SS/g, date.getSeconds().toString().padStart(2, '0'))
        .replace(/%S/g, date.getSeconds().toString())
        .replace(/%f/g, date.getMilliseconds().toString().padStart(3, '0'));
}

/**
 * Returns array of enum keys
 * @param type
 */
export function enumKeys(type: object) {
    return Object.keys(type)
        .map(it => it as keyof typeof type)
}

export function toReadableEnum(text: string): string {
    return text.replaceAll(/([A-Z])/g, " $1").toLowerCase();
}

export function repositionItemInList(items: Array<any>, item: any, newIndex: number) {
    const currentIndex = items.indexOf(item);

    if (currentIndex >= 0) {
        // Remove item from items
        items.splice(currentIndex, 1);

        if (newIndex > currentIndex) {
            newIndex--;
        }
    }

    // Add item to new index
    items.splice(newIndex, 0, item);

    // Set all indices
    items.forEach((item, i) => item.index = i);
}

export function replaceItemInList(items: Array<any>, oldItem: any, newItem: any) {
    const currentIndex = items.indexOf(oldItem);

    // Replace old item with new item
    items.splice(currentIndex, 1, newItem);
}

export function removeItemFromList(items: Array<any>, item: any) {
    const currentIndex = items.indexOf(item);

    // Replace old item with new item
    items.splice(currentIndex, 1);
}

export function capitalize(word: string) {
    if (word.length === 0) {
        return word;
    }

    if (word.length === 1) {
        return word.toUpperCase();
    }

    return word.charAt(0).toUpperCase() + word.substring(1);
}

export function getFileExtension(file: string) {
    const parts = file.split(".");
    if (parts.length <= 1) {
        return "";
    }
    return "." + parts[parts.length - 1].toLowerCase();
}
