import { Item } from "@/components/expense/Item";
import { Expense } from "@prisma/client";

export const Items = ({ data }: { data: Expense[] }) => {
  return (
    <div className="flex flex-col gap-1 ml-4">
      {data.map((expense, i) => {
        return <Item item={expense} position={i} key={expense.id} />;
      })}
    </div>
  );
};
