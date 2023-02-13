import numeral from 'numeral';

export const convertDecimal = (val) => {
  return Number(numeral(val).format('0.00'));
};
