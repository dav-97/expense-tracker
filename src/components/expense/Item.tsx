import { numberWithCommas } from "@/utils/formatNumbers";
import { Expense } from "@prisma/client";

export const Item = ({
  item,
  position,
}: {
  item: Expense;
  position: number;
}) => (
  <div
    className={`${
      position >= 1 && "border-t-bg-300 border-t pt-1"
    } flex flex-row justify-between w-full items-center`}
  >
    <span>{item.info}</span>
    <span
      className={`${
        item.amount < 0
          ? "bg-primary-100 border-primary-200 text-text-100"
          : "bg-accent-100 border-accent-200 text-bg-100"
      } border-2 rounded-md p-2`}
    >
      {numberWithCommas(item.amount)}
    </span>
  </div>
);
