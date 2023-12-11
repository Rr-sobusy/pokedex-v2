export function getSumArr(arr: number[]): number {
  let sum = 0;
  arr?.forEach((value: number) => {
    sum += value;
  });

  return sum;
}
