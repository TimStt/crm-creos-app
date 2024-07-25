export const filtersArrayByField = <T, K extends keyof T, V extends T[K]>(
  arr: T[],
  field: K,
  value?: V
) => {
  return arr.filter((item) => (value ? item[field] === value : item[field]));
};
