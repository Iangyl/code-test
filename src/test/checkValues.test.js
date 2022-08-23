import checkValues from '../utils/checkValues';
import { status } from '../utils/renderInitialValue';

describe('Check values', () => {
  test('Number test', () => {
    const result = checkValues(1, 2);
    const result1 = checkValues(1, 1);

    expect(result).toBe(status.mistake);
    expect(result1).toBe(status.success);
  });

  test('String test', () => {
    const result = checkValues('1', '1');
    const result1 = checkValues('2', '1');

    expect(result).toBe(status.success);
    expect(result1).toBe(status.mistake);
  });

  test('Boolean test', () => {
    const result = checkValues(false, false);
    const result1 = checkValues(false, true);

    expect(result).toBe(status.mistake);
    expect(result1).toBe(status.mistake);
  });

  test('Null values test', () => {
    const result = checkValues(null, 'false');
    const result1 = checkValues(null, 1);
    const result2 = checkValues(null, null);
    const result3 = checkValues(null, undefined);
    const result4 = checkValues(null, false);

    expect(result).toBe(status.mistake);
    expect(result1).toBe(status.mistake);
    expect(result2).toBe(status.mistake);
    expect(result3).toBe(status.mistake);
    expect(result4).toBe(status.mistake);
  });

  test('Undefined values test', () => {
    const result = checkValues(undefined, undefined);
    const result1 = checkValues(undefined, 'undefined');
    const result2 = checkValues(undefined, 1);
    const result3 = checkValues(undefined, false);

    expect(result).toBe(status.mistake);
    expect(result1).toBe(status.mistake);
    expect(result2).toBe(status.mistake);
    expect(result3).toBe(status.mistake);
  });

  test('Unexpected values test', () => {
    const result = checkValues(0, true);
    const result1 = checkValues(1, true);

    expect(result).toBe(status.mistake);
    expect(result1).toBe(status.success);
  });
});
