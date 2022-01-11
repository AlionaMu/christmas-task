export const getStorageData = (type: string) => {
  const stored = localStorage.getItem(type);
  if (stored && stored.length !== 0) {
    const storage = JSON.parse(stored);
    return storage;
  }
};