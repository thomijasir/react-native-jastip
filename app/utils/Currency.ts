export const formatIDR = (amount: number) => {
  const addedSeparator = amount.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&.');
  const decimalFormatted = addedSeparator.replace(/.(?=[^.]*$)/, ',');
  return `Rp. ${decimalFormatted}`;
};

export const formatRupiah = (value: string) => {
  const minus = parseInt(value, 10) < 0 ? '-' : '';
  let rupiah = '';
  const angkarev = Math.abs(parseInt(value, 10))
    .toString()
    .split('')
    .reverse()
    .join('');
  for (let i = 0; i < angkarev.length; i += 1)
    if (i % 3 === 0) rupiah += `${angkarev.substr(i, 3)}.`;

  return `${minus}Rp ${rupiah
    .split('', rupiah.length - 1)
    .reverse()
    .join('')}`;
};

export const formatIDRNoDecimal = (amount: number | string) => {
  const amountNumber = Number(amount);
  const amountValue = isNaN(amountNumber) ? 0 : amountNumber;
  const decimalFormatted = amountValue.toLocaleString('id-ID', {
    style: 'decimal',
    maximumFractionDigits: 0,
  });
  return `Rp ${decimalFormatted}`;
};

export const formatThousandSeparator = (amount: number) => {
  const amountNumber = Number(amount);
  const decimalFormatted = amountNumber.toLocaleString('id-ID', {
    style: 'decimal',
    maximumFractionDigits: 0,
  });
  return `${decimalFormatted}`;
};

export const formatDecimal = (amount: number | string) => {
  const amountNumber = Number(amount);
  const decimalFormatted = amountNumber.toLocaleString('id-ID', {
    style: 'decimal',
    maximumFractionDigits: 7,
  });
  return `${decimalFormatted}`;
};

export const formatDecimalInput = (amount: string) => {
  const amountNumber = amount.toString();
  const removeSpecialCharacter = amountNumber.replace(/\D/g, '.');
  const sanitize = removeSpecialCharacter.replace(/[^\d,]/g, '');
  const formattedInput =
    Number(amount) >= 1
      ? amountNumber.toString()
      : sanitize.replace(sanitize[0], `${sanitize[0]},`);
  return amountNumber.length === 1 ? amountNumber : formattedInput;
};

export default {
  formatIDR,
  formatIDRNoDecimal,
  formatThousandSeparator,
  formatDecimal,
  formatDecimalInput,
};
