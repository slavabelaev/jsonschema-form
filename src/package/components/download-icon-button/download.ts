export function download(
    fileName: string = 'filename',
    content: string,
    mimeType: string = 'text/plain'
) {
    const element = document.createElement('a');
    element.setAttribute('href', `data:${mimeType};charset=utf-8,` + encodeURIComponent(content));
    element.setAttribute('download', fileName);
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
}
