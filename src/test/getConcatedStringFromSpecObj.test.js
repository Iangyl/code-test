import getConcatedStringFromSpecObj from '../utils/getConcatedStringFromSpecObj';

describe('Get concated string from objects', () => {
  test('Common usage', () => {
    const result = getConcatedStringFromSpecObj([
      { value: 'a' },
      { value: 'b' },
      { value: 'c' },
    ]);
    const result1 = getConcatedStringFromSpecObj([
      { value: 1 },
      { value: 1 },
      { value: 1 },
    ]);
    const result2 = getConcatedStringFromSpecObj([
      { value: 1 },
      { value: 'a' },
      { value: 1 },
    ]);

    expect(result).toBe('abc');
    expect(result1).toBe('111');
    expect(result2).toBe('1a1');
  });

  test('Unexpected values', () => {
    const result = getConcatedStringFromSpecObj([
      { value: { key: 1 } },
      { value: [] },
      { value: 'c' },
    ]);
    const result1 = getConcatedStringFromSpecObj([
      { value: null },
      { value: undefined },
      { value: 1 },
    ]);
    const result2 = getConcatedStringFromSpecObj([
      { value: null },
      { value: undefined },
      { value: [] },
      { value: { key: 2 } },
    ]);

    expect(result).toBe('c');
    expect(result1).toBe('1');
    expect(result2).toBe('');
  });
});
