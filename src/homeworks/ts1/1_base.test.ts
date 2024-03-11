import { transformCustomers, getNumberedArray, toStringArray, ArrayItem } from './1_base';

describe('all', () => {
  it('transformCustomers', () => {
    const customers = [
      { id: 1, name: 'John', age: 25, isSubscribed: true },
      { id: 2, name: 'Mary', age: 40, isSubscribed: false },
      { id: 3, name: 'Bob', age: 32, isSubscribed: true },
      { id: 4, name: 'Alice', age: 22, isSubscribed: true },
      { id: 5, name: 'David', age: 48, isSubscribed: false },
    ];

    expect(transformCustomers(customers)).toEqual({
      1: { name: 'John', age: 25, isSubscribed: true },
      2: { name: 'Mary', age: 40, isSubscribed: false },
      3: { name: 'Bob', age: 32, isSubscribed: true },
      4: { name: 'Alice', age: 22, isSubscribed: true },
      5: { name: 'David', age: 48, isSubscribed: false },
    });
  });
});

describe('all', () => {
  it('getNumberedArray', () => {
    const arr = ['red', 'green', 'blue']

    const expected: ArrayItem<string>[] = [
      {value: 'red', number: 0},
      {value: 'green', number: 1},
      {value: 'blue', number: 2}
    ]

    expect(getNumberedArray(arr)).toEqual(expected)
  })
});

describe('all', () => {
  it('toStringArray', () => {
    const arr: ArrayItem<number>[] = [
      {value: 1, number: 0},
      {value: 2, number: 1},
      {value: 3, number: 2}
    ]

    const expected = [
      '1_0',
      '2_1',
      '3_2'
    ]

    expect(toStringArray(arr)).toEqual(expected)
  })
});