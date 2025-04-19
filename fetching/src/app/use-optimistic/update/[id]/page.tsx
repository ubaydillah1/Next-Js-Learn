import { getProduct } from "@/prisma-db";
import React from "react";
import FormEdit from "./formEdit";
import { Product } from "@prisma/client";
import { notFound } from "next/navigation";

const EditPage = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;

  const product: Product | null = await getProduct(Number(id));

  if (!product) return notFound();

  return <FormEdit product={product} />;
};

export default EditPage;
