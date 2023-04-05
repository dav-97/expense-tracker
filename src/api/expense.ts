import { Prisma } from "@prisma/client";
import axios from "axios";

export type Expense = Prisma.ExpenseGetPayload<{
  include: {
    category: true;
  };
}>;

export const getExpenses = async (
  page: number,
  perPage: number
): Promise<{ data: Expense[]; totalItems: number; totalAmount: number }> => {
  const response = await axios.get(
    `/api/expense?page=${page}&perPage=${perPage}`
  );
  return response.data;
};

export const getExpense = async (id: number): Promise<Expense> => {
  const response = await axios.get(`/api/expense/${id}`);
  return response.data;
};

export const createExpense = async (data: {
  amount: number;
  info: string;
  category: string;
}): Promise<Expense> => {
  const response = await axios.post(`/api/expense`, data);
  return response.data;
};

export const updateExpense = async (
  id: number,
  data: Prisma.ExpenseUpdateInput
): Promise<Expense> => {
  const response = await axios.put(`/api/expense/${id}`, data);
  return response.data;
};

export const deleteExpense = async (id: number): Promise<Expense> => {
  const response = await axios.delete(`/api/expense/${id}`);
  return response.data;
};
