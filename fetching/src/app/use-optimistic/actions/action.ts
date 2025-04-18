"use server";

import { addProduct } from "@/prisma-db";
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

const createProduct = async (prevData: FormDataState, formData: FormData) => {
  const title = formData.get("title") as string;
  const price = formData.get("price") as string;
  const description = formData.get("description") as string;

  console.log("Masuk sini?");

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

export default createProduct;
