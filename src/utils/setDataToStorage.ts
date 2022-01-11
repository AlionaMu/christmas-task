export const setDataToStorage = (storage: string[], type: string, value: string) => {
  storage.push(value);
  localStorage.setItem(type, JSON.stringify(storage));
};