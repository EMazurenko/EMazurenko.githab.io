import { Data, getDataAmount } from './2_repair';

describe('all', () => {
  it('getDataAmount Money', () => {
    const arg: Data = {
      type: 'Money',
      value: {
        amount: 100,
        currency: '810',
      },
    };

    const expected = 100;

    expect(getDataAmount(arg)).toEqual(expected);
  });

  it('getDataAmount Percent', () => {
    const arg: Data = {
      type: 'Percent',
      value: {
        percent: 0.25,
      },
    };

    expect(() => getDataAmount(arg)).toThrow(`unknown type: ${arg.type}`);
  });
});
