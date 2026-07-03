export function cn(...classes: Array<string | false | 0 | undefined>) {
  return classes.filter(Boolean).join(' ');
}

export function formatPrice(value: number, currency = '₽', locale = 'ru-RU') {
  return new Intl.NumberFormat(locale, { style: 'currency', currency }).format(value);
}
