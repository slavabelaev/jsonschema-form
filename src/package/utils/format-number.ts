import fileSize from "filesize";

export function toNumber(number?: number) {
    if (!Number.isFinite(number as number)) return;
    return Intl.NumberFormat().format(number as number);
}

export function toCurrency(number?: number) {
    if (!Number.isFinite(number as number)) return;
    return new Intl.NumberFormat('ru-RU', {
        style: 'currency',
        currency: 'RUB'
    }).format(number as number).slice?.(0,-2);
}

export function toDate(number?: number) {
    const time = number && new Date(number).getTime();
    if (!Number.isFinite(time as number)) return;
    return new Intl.DateTimeFormat(undefined, {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric'
    }).format(time);
}

export function toTime(number?: number) {
    const time = number && new Date(number).getTime();
    if (!Number.isFinite(time as number)) return;
    return new Intl.DateTimeFormat(undefined, {
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric'
    }).format(time)
}

export function toDateTime(number?: number) {
    const time = number && new Date(number).getTime();
    if (!Number.isFinite(time as number)) return;
    return new Intl.DateTimeFormat(undefined, {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        hour12: false
    }).format(time)
}

export function toFileSize(number?: number) {
    const sizeNumber = Number(number);
    if (!Number.isFinite(sizeNumber)) return;
    const bytes = (3 * (sizeNumber / 4)) || 0;
    return fileSize(bytes);
}
