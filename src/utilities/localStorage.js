export const getItem = (name) => {
  const value = localStorage.getItem(name);
  return JSON.parse(value);
};

export const setItem = (name, data) => {
  localStorage.setItem(name, JSON.stringify(data));
};
