export function sumDigits(number: number): number {
  if (!Number.isInteger(number) || number < 0) {
    throw new Error('INVALID_NUMBER');
  }

  if (number === 0) {
    return 0;
  }

  let value = number;
  let sum = 0;

  while (value > 0) {
    sum += value % 10;
    value = Math.floor(value / 10);
  }

  return sum;
}