import { getExpenses } from "@/api/expense";
import Pagination from "@/components/Pagination";
import { Expense } from "@prisma/client";
import { useEffect, useState } from "react";
import { DateTime } from "luxon";
import { Items } from "@/components/expense/Items";
import { numberWithCommas } from "@/utils/formatNumbers";

const Overview = () => {
  const [expenses, setExpenses] = useState<Expense[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalItems, setTotalItems] = useState<number>(0);
  const [totalAmount, setTotalAmount] = useState<number>(0);
  const [itemsPerPage] = useState(5);

  const getValue = (pageNumber: number, perPage: number) => {
    getExpenses(pageNumber, perPage).then(
      ({ data, totalItems, totalAmount }) => {
        setExpenses(data);
        setTotalItems(totalItems);
        setTotalAmount(totalAmount);
      }
    );
  };

  const paginate = (pageNumber: number) => {
    if (pageNumber === currentPage) return;
    setCurrentPage(pageNumber);
  };

  const dates: { text: string; data: Expense[] }[] = [];

  expenses.forEach((expense) => {
    const today = DateTime.now().toFormat("dd/MM/yyyy");
    const date = DateTime.fromJSDate(new Date(expense.date)).toFormat(
      "dd/MM/yyyy"
    );

    if (today === date) {
      return dates.push({
        text: "Today",
        data: [expense],
      });
    }
    const datesIndex = dates.findIndex(({ text }) => text === date);
    if (datesIndex >= 0) {
      return dates[datesIndex].data.push(expense);
    }
    dates.push({
      text: date,
      data: [expense],
    });
  });

  useEffect(() => {
    getValue(currentPage, itemsPerPage);
  }, [currentPage, itemsPerPage]);

  return (
    <div className="flex flex-col justify-between h-full">
      {"€" + numberWithCommas(totalAmount)}
      {dates.map(({ text, data }) => (
        <div key={text} className="mb-4">
          <span className="text-blue-300">{text}</span>
          <Items data={data} />
        </div>
      ))}
      <Pagination
        itemsPerPage={itemsPerPage}
        totalItems={totalItems}
        paginate={paginate}
        currentPage={currentPage}
      />
    </div>
  );
};

export default Overview;
