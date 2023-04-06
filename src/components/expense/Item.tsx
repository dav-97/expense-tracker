import { numberWithCommas } from "@/utils/formatNumbers";
import { Expense } from "@prisma/client";
import { useRouter } from "next/router";

export const Item = ({
  item,
  position,
}: {
  item: Expense;
  position: number;
}) => {
  const router = useRouter();
  return (
    <div
      className={`${
        position >= 1 && "border-t-bg-300 border-t pt-1"
      } flex md:flex-row flex-col justify-between w-full md:items-center gap-2`}
    >
      <span>{item.info}</span>
      <div className="flex gap-2">
        <span
          className={`${
            item.amount < 0
              ? "bg-primary-100 border-primary-200 text-text-100"
              : "bg-accent-100 border-accent-200 text-bg-100"
          } border-2 rounded-md p-2`}
        >
          {numberWithCommas(item.amount)}
        </span>
        <button
          onClick={() => router.push(`/${item.id}`)}
          className="px-3 py-2 border border-white rounded-full"
        >
          View
        </button>
      </div>
    </div>
  );
};
