"use server";

import { removeProduct } from "@/actions/products";
import { addProduct, updateProduct } from "@/prisma-db";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export type Errors = {
  title?: string;
  description?: string;
  price?: string;
};

export type FormDataState = {
  errors: Errors;
  values: {
    title: string;
    description: string;
    price: string;
  };
};

export const createProduct = async (
  prevData: FormDataState,
  formData: FormData
) => {
  const title = formData.get("title") as string;
  const price = formData.get("price") as string;
  const description = formData.get("description") as string;

  const errors: Errors = {};

  const values = {
    title,
    description,
    price,
  };

  if (!title) {
    errors.title = "Title is required";
  }

  if (!description) {
    errors.description = "Description is requiered";
  }

  if (!price) {
    errors.price = "Price is requiered";
  }

  if (Object.keys(errors).length > 0) {
    return { errors, values };
  }

  await addProduct(title, Number(price), description);
  redirect("/use-optimistic/view-card");
};

export const editProduct = async (
  id: number,
  prevData: FormDataState,
  formData: FormData
) => {
  const title = formData.get("title") as string;
  const price = formData.get("price") as string;
  const description = formData.get("description") as string;

  const errors: Errors = {};

  const values = {
    title,
    description,
    price,
  };

  if (!title) {
    errors.title = "Title is required";
  }

  if (!description) {
    errors.description = "Description is requiered";
  }

  if (!price) {
    errors.price = "Price is requiered";
  }

  if (Object.keys(errors).length > 0) {
    return { errors, values };
  }

  await updateProduct(id, title, Number(price), description);
  redirect("/use-optimistic/view-card");
};

export const deleteProduct = async (id: number) => {
  new Promise((resolve) => setTimeout(resolve, 1500));
  await removeProduct(id);
  revalidatePath("/use-optimistic/view-card");
};
