export const countingElementsByField = <T, K extends keyof T, V extends T[K]>(
  data: T[],
  field: K,
  value?: V
) => {
  return data.filter((item) => (value ? item[field] === value : item[field]))
    .length;
};
