export const roundAmount = (value: number) =>
  Math.round((value + Number.EPSILON) * 100) / 100;

export const numberWithCommas = (x: number) =>
  x.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
