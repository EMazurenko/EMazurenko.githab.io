/**
 * Нужно превратить файл в ts и указать типы аргументов и типы возвращаемого значения
 * */
export const removePlus = (value: string): string => value.replace(/^\+/, '');

export const addPlus = (value: string): string => `+${value}`;

export const removeFirstZeros = (value: string): string=> value.replace(/^(-)?[0]+(-?\d+.*)$/, '$1$2');

type OptionalNumber = number | undefined
export const getBeautifulNumber = (value: OptionalNumber, separator = ' '): string =>
  value?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, separator);

export const round = (value: number, accuracy = 2): number => {
  const d = 10 ** accuracy;
  return Math.round(value * d) / d;
};

const transformRegexp =
  /(matrix\(-?\d+(\.\d+)?, -?\d+(\.\d+)?, -?\d+(\.\d+)?, -?\d+(\.\d+)?, )(-?\d+(\.\d+)?), (-?\d+(\.\d+)?)\)/;

type Point = {x: number, y: number}
export const getTransformFromCss = (transformCssString: string): Point => {
  const data = transformCssString.match(transformRegexp);
  if (!data) return { x: 0, y: 0 };
  return {
    x: parseInt(data[6], 10),
    y: parseInt(data[8], 10),
  };
};

type ColorComponents = [number, number, number]
export const getColorContrastValue = ([red, green, blue]: ColorComponents): number =>
  // http://www.w3.org/TR/AERT#color-contrast
  Math.round((red * 299 + green * 587 + blue * 114) / 1000);

type ColorName = 'black' | 'white'
export const getContrastType = (contrastValue: number): ColorName => (contrastValue > 125 ? 'black' : 'white');

export const shortColorRegExp = /^#[0-9a-f]{3}$/i;
export const longColorRegExp = /^#[0-9a-f]{6}$/i;

export const checkColor = (color: string): void | never => {
  if (!longColorRegExp.test(color) && !shortColorRegExp.test(color)) throw new Error(`invalid hex color: ${color}`);
};

export const hex2rgb = (color: string): ColorComponents | never => {
  checkColor(color);
  if (shortColorRegExp.test(color)) {
    const red = parseInt(color.substring(1, 2), 16);
    const green = parseInt(color.substring(2, 3), 16);
    const blue = parseInt(color.substring(3, 4), 16);
    return [red, green, blue];
  }
  const red = parseInt(color.substring(1, 3), 16);
  const green = parseInt(color.substring(3, 5), 16);
  const blue = parseInt(color.substring(5, 8), 16);
  return [red, green, blue];
};

export type ArrayItem<T> = {value: T, number: number}
export const getNumberedArray = (arr: unknown[]): ArrayItem<unknown>[] => arr.map((value, number) => ({ value, number }));
export const toStringArray = (arr: ArrayItem<unknown>[]): string[] => arr.map(({ value, number }) => `${value}_${number}`);

type Customer = {name: string, age: number, isSubscribed: boolean, id?: number}
type IndexableCustomers = {[index: number]: Customer}
export const transformCustomers = (customers: Customer[]): IndexableCustomers => {
  return customers.reduce((acc: IndexableCustomers, customer: Customer): IndexableCustomers => {
    acc[customer.id] = { name: customer.name, age: customer.age, isSubscribed: customer.isSubscribed };
    return acc;
  }, {});
};
