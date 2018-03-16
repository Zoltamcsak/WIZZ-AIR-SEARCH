export function setElementToLocalStorage(key: string, element: any): void {
  if (isLocalStorageSupported()) {
    localStorage.setItem(key, JSON.stringify(element));
  } else {
    console.warn('Sorry your browser does not support local storage');
  }
}

export function getElementFromLocalStorage<T>(key: string): T | null {
  if (isLocalStorageSupported()) {
    const elem = localStorage.getItem(key);
    return JSON.parse(elem);
  } else {
    console.warn('Sorry your browser does not support local storage');
    return null;
  }
}

function isLocalStorageSupported(): boolean {
  return typeof(Storage) !== undefined;
}
