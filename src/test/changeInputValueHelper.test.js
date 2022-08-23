import changeInputValueHelper from '../utils/changeInputValueHelper';

describe('Test modify object in array', () => {
  test('Correct way', () => {
    const result = changeInputValueHelper(
      [
        { key: 1, index: 1 },
        { key: 2, index: 2 },
        { key: 3, index: 3 },
      ],
      { key: 5, index: 1 },
    );
    const resultAlt = changeInputValueHelper(
      [
        { key: 1, index: 1 },
        { key: 2, index: 2 },
        { key: 3, index: 3 },
      ],
      { value: 5, index: 1 },
    );

    expect(result).toEqual([
      { key: 5, index: 1 },
      { key: 2, index: 2 },
      { key: 3, index: 3 },
    ]);
    expect(resultAlt).toEqual([
      { key: 1, index: 1, value: 5 },
      { key: 2, index: 2 },
      { key: 3, index: 3 },
    ]);
  });

  test('Incorrect way', () => {
    const result = changeInputValueHelper(
      [
        { key: 1, index: 1 },
        { key: 2, index: 2 },
        { key: 3, index: 3 },
      ],
      { key: 5, index: 0 },
    );
    const resultStr = changeInputValueHelper(
      [
        { key: 1, index: 1 },
        { key: 2, index: 2 },
        { key: 3, index: 3 },
      ],
      '{key: 5, index: 0}',
    );
    const resultNum = changeInputValueHelper(
      [
        { key: 1, index: 1 },
        { key: 2, index: 2 },
        { key: 3, index: 3 },
      ],
      5,
    );

    expect(result).toEqual([
      { key: 1, index: 1 },
      { key: 2, index: 2 },
      { key: 3, index: 3 },
    ]);
    expect(resultStr).toEqual([
      { key: 1, index: 1 },
      { key: 2, index: 2 },
      { key: 3, index: 3 },
    ]);
    expect(resultNum).toEqual([
      { key: 1, index: 1 },
      { key: 2, index: 2 },
      { key: 3, index: 3 },
    ]);
  });
});
