import { Expense } from "@prisma/client";
import axios from "axios";

export const getExpenses = async (page: number, perPage: number) => {
  const response = await axios.get(
    `/api/expense?page=${page}&perPage=${perPage}`
  );
  return response.data;
};

export const getExpense = async (id: number) => {
  const response = await axios.get(`/api/expense/${id}`);
  return response.data;
};

export const updateExpense = async (id: number, data: Expense) => {
  const response = await axios.put(`/api/expense/${id}`, data);
  return response.data;
};

export const deleteExpense = async (id: number) => {
  const response = await axios.delete(`/api/expense/${id}`);
  return response.data;
};

export const createExpense = async (data: Expense) => {
  const response = await axios.post(`/api/expense`, data);
  return response.data;
};
