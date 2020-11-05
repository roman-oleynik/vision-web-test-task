export function setLocalStorageItem (key: string, value: string | boolean) {
    localStorage.setItem(key, JSON.stringify(value));
};

export function getLocalStorageItem (key: string) {
    return localStorage.getItem(key);
};

export function removeLocalStorageItem (key: string) {
    localStorage.removeItem(key);
}
