"use client";

import SubmitButton from "@/components/submit";
import { useActionState } from "react";
import { FormState, createProduct } from "@/actions/products";

export default function AddProductPage() {
  const initialState: FormState = {
    errors: {},
  };

  const [state, formAction] = useActionState(createProduct, initialState);

  return (
    <form
      className="p-4 space-y-4 max-w-96 bg-purple-500"
      action={formAction}
      method="POST"
    >
      <label className="text-white">
        Title
        <input
          type="text"
          className="block w-full p-2 text-black border rounded"
          name="title"
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
        />
      </label>
      {state.errors.description && (
        <p className="text-red-500">{state.errors.description}</p>
      )}
      <SubmitButton />
    </form>
  );
}
