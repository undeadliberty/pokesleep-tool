/**
 * Read textfile.
 * @param file file object to be read.
 * @returns Promise object.
 */
export function readFileAsText(file: File): Promise<string> {
    return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = () => {
                resolve(reader.result as string);
            };
            reader.onerror = () => {
                reject(reader.error);
            };
            reader.readAsText(file);
        });
}

/**
 * Save to textfile.
 * @param text contents of file.
 * @param filename filename to be downloaded.
 */
export function downloadAsTextFile(text: string, filename: string) {
  const blob = new Blob([text], {type: 'text/plain;charset=utf-8;'});
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url); // free memory
}