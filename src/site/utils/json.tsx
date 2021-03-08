export function toJSON(data?: any) {
    return JSON.stringify(data, null, 2);
}

export function parseJSON(json?: string) {
    try {
        return JSON.parse(json as string);
    } catch {}
}
