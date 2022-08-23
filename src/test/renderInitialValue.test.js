import renderInitialValue, { status } from '../utils/renderInitialValue';

describe('Render initial values', () => {
  test('Common usage', () => {
    const result = renderInitialValue(2);
    const result1 = renderInitialValue('2');

    expect(result).toEqual([
      { index: 0, value: '', status: status.default },
      { index: 1, value: '', status: status.default },
    ]);
    expect(result1).toEqual([
      { index: 0, value: '', status: status.default },
      { index: 1, value: '', status: status.default },
    ]);
  });
  test('Unexpected usage', () => {
    const result = renderInitialValue(null);
    const result1 = renderInitialValue(undefined);
    const result2 = renderInitialValue('undefined');
    const result3 = renderInitialValue(true);
    const result4 = renderInitialValue([true]);
    const result5 = renderInitialValue({ key: 1 });

    expect(result).toEqual([
      { index: 0, value: '', status: status.default },
      { index: 1, value: '', status: status.default },
      { index: 2, value: '', status: status.default },
      { index: 3, value: '', status: status.default },
    ]);
    expect(result1).toEqual([
      { index: 0, value: '', status: status.default },
      { index: 1, value: '', status: status.default },
      { index: 2, value: '', status: status.default },
      { index: 3, value: '', status: status.default },
    ]);
    expect(result2).toEqual([
      { index: 0, value: '', status: status.default },
      { index: 1, value: '', status: status.default },
      { index: 2, value: '', status: status.default },
      { index: 3, value: '', status: status.default },
    ]);
    expect(result3).toEqual([
      { index: 0, value: '', status: status.default },
      { index: 1, value: '', status: status.default },
      { index: 2, value: '', status: status.default },
      { index: 3, value: '', status: status.default },
    ]);
    expect(result4).toEqual([
      { index: 0, value: '', status: status.default },
      { index: 1, value: '', status: status.default },
      { index: 2, value: '', status: status.default },
      { index: 3, value: '', status: status.default },
    ]);
    expect(result5).toEqual([
      { index: 0, value: '', status: status.default },
      { index: 1, value: '', status: status.default },
      { index: 2, value: '', status: status.default },
      { index: 3, value: '', status: status.default },
    ]);
  });
});
