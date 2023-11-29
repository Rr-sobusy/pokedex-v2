/**
 * * This function return a three digits number.
 */ export function formatToThree(num: number): string {
  let toFormat = num.toString();

  while (toFormat.length < 3) {
    toFormat = '0' + toFormat  ;
  }

  return (toFormat);
}
