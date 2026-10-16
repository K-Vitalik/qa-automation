import { describe, expect, it } from 'vitest';
import { sumDigits } from '../src/sumDigits';

describe('sumDigits', () => {
  it('повертає суму цифр числа 12345', () => {
    expect(sumDigits(12345)).toBe(15);
  });

  it('правильно обчислює суму цифр числа з нулями', () => {
    expect(sumDigits(102030)).toBe(6);
  });

  it('повертає 0 для межового значення 0', () => {
    expect(sumDigits(0)).toBe(0);
  });

  it('повертає значення самої цифри для однозначного числа', () => {
    expect(sumDigits(7)).toBe(7);
  });

  it('відхиляє від’ємне число', () => {
    expect(() => sumDigits(-123)).toThrow('INVALID_NUMBER');
  });

  it('відхиляє дробове число', () => {
    expect(() => sumDigits(12.5)).toThrow('INVALID_NUMBER');
  });

  it('відхиляє NaN', () => {
    expect(() => sumDigits(NaN)).toThrow('INVALID_NUMBER');
  });
});