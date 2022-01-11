export const deleteDataFromStorage = (storage: string[], type: string, value: string) => {
  const maped: string[] = [];
  storage.forEach((item:string) => item === value ? false : maped.push(item));
  localStorage.setItem(type, JSON.stringify(maped));
};