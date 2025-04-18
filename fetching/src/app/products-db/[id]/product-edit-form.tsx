"use client";

import SubmitButton from "@/components/submit";
import { useActionState } from "react";
import { FormState, editProduct } from "@/actions/products";
import { Product } from "@prisma/client";

export default function EditProductForm({ product }: { product: Product }) {
  const initialState: FormState = {
    errors: {},
  };

  const editProductWithId = editProduct.bind(null, product.id);

  const [state, formAction, isPending] = useActionState(
    editProductWithId,
    initialState
  );

  return (
    <div className="w-full h-screen flex justify-center items-center flex-col">
      <div>{isPending && "Loading..."}</div>
      <form
        className="p-4 space-y-4 w-[500px] max-h-full bg-purple-500"
        action={formAction}
      >
        <label className="text-white">
          Title
          <input
            type="text"
            className="block w-full p-2 text-black border rounded"
            name="title"
            defaultValue={product.title ?? ""}
          />
        </label>
        {state.errors.title && (
          <p className="text-red-500">{state.errors.title}</p>
        )}
        <label className="text-white">
          Price
          <input
            type="number"
            className="block w-full p-2 text-black border rounded"
            name="price"
            defaultValue={product.price ?? ""}
          />
        </label>
        {state.errors.price && (
          <p className="text-red-500">{state.errors.price}</p>
        )}
        <label className="text-white">
          Description
          <textarea
            className="block w-full p-2 text-black border rounded"
            name="description"
            defaultValue={product.description ?? ""}
          />
        </label>
        {state.errors.description && (
          <p className="text-red-500">{state.errors.description}</p>
        )}
        <SubmitButton />
      </form>
    </div>
  );
}
