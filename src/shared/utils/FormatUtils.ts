export const priceFormatter = new Intl.NumberFormat('ru-RU', { style: 'currency', currency: 'RUB' });
export const dateFormatter = (date: Date) => date.toLocaleDateString() + ' ' + date.toLocaleTimeString();
