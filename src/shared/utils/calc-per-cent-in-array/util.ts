export const calcPerCentInArray = (dataList: number[]): number[] => {
  const total = dataList.reduce((acc, value) => acc + value, 0);
  return dataList.map((value) => Math.round((value * 100) / total));
};
