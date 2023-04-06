import { Expense, deleteExpense, getExpense } from "@/api/expense";
import { formatDate, numberWithCommas } from "@/utils/formatNumbers";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const Overview = () => {
  const [expense, setExpense] = useState<Expense>();
  const router = useRouter();
  const { id } = router.query;

  const deleteItem = () => {
    deleteExpense(parseInt(id as string));
    router.push("/");
  };

  const editItem = () => {
    router.push(`/${id}/edit`);
  };

  useEffect(() => {
    if (id) getExpense(parseInt(id as string)).then((res) => setExpense(res));
  }, [id]);

  return (
    <div className="flex flex-col">
      <div>Amount: {numberWithCommas(expense?.amount)}</div>
      <div>Info: {expense?.info}</div>
      <div>Date: {formatDate(expense?.date)}</div>
      <div>Category: {expense?.category.name}</div>
      <div className="flex flex-row gap-4 mt-2">
        <button
          className="px-3 py-2 border border-white rounded-full"
          onClick={editItem}
        >
          Edit
        </button>
        <button
          className="px-3 py-2 text-red-500 border border-red-500 rounded-full"
          onClick={deleteItem}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default Overview;
