export const summingArrayNumber = <T>(arr: T[]) => {
  return arr.reduce((acc, item) => acc + +item, 0);
};
