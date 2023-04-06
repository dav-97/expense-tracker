import { createExpense, getExpenses } from "@/api/expense";
import "@testing-library/jest-dom";

test("Gets expenses", () => {
  getExpenses(0, 10).then(({ data, totalAmount, totalItems }) => {
    expect(data).toHaveLength(10);
    expect(typeof totalAmount).toBe("number");
    expect(typeof totalItems).toBe("number");
  });
});

test("Create expense", () => {
  createExpense({
    amount: 5000,
    info: "Lorem ipsum",
    category: "Lorem ipsum",
  }).then(({ amount, category, info, id }) => {
    expect(amount).toBe(5000);
    expect(category.name).toBe("Lorem ipsum");
    expect(info).toBe("Lorem ipsum");
  });
});
