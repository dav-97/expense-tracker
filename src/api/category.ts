import { Category } from "@prisma/client";
import axios from "axios";

export const getCategories = async () => {
  const response = await axios.get(`/api/category`);
  return response.data;
};

export const getCategory = async (id: string) => {
  const response = await axios.get(`/api/category/${id}`);
  return response.data;
};

export const updateCategory = async (id: string, data: Category) => {
  const response = await axios.put(`/api/category/${id}`, data);
  return response.data;
};

export const deleteCategory = async (id: string) => {
  const response = await axios.delete(`/api/category/${id}`);
  return response.data;
};

export const createCategory = async (data: Category) => {
  const response = await axios.post(`/api/category`, data);
  return response.data;
};
