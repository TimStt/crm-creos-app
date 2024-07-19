export const countingElementsByField = <T extends Array<Record<string, any>>>(
  data: T,
  field: string,
  value: string
) => {
  return data.filter((item) => item[field] === value).length;
};
