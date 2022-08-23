import getRandomIntInclusive from '../utils/getRandomIntInclusive';

test('Common usage', () => {
  const result = getRandomIntInclusive(1000, 10000);

  expect(result).toBeDefined();
  expect(result).toBeGreaterThan(999);
  expect(result).toBeLessThan(10000);
  expect(typeof result).toBe('number');
});
