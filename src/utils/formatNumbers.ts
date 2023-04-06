import { DateTime } from "luxon";

export const roundAmount = (value: number) =>
  Math.round((value + Number.EPSILON) * 100) / 100;

export const numberWithCommas = (x: number | undefined) => {
  if (x) return x.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return "Invalid number";
};

export const formatDate = (date: Date | undefined) => {
  if (date) return DateTime.fromJSDate(new Date(date)).toFormat("dd/MM/yyyy");
  return "No date found";
};
