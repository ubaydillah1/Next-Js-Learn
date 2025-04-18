"use client";

import React, { useActionState } from "react";
import SubmitButton from "./submitButton";
import createProduct, { FormDataState } from "../actions/action";

const CreatePage = () => {
  const initialState: FormDataState = {
    errors: {},
    values: {
      title: "",
      price: "",
      description: "",
    },
  };

  const [state, formAction] = useActionState(createProduct, initialState);
  return (
    <div>
      <form
        action={formAction}
        className="w-fit bg-white rounded-4xl text-black font-semibold p-20 flex flex-col gap-4 mx-auto my-20"
      >
        <h1 className="font-bold text-[52px] text-center">Create Products</h1>
        <div className="flex flex-col gap-2">
          <label htmlFor="title">Title</label>
          <input
            className="outline outline-black rounded p-4"
            type="text"
            id="title"
            name="title"
            defaultValue={state.values.title}
          />
          {state.errors.title && (
            <p className="text-red-500">{state.errors.title}</p>
          )}
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="price">Price</label>
          <input
            className="outline outline-black rounded p-4"
            type="number"
            id="price"
            name="price"
            defaultValue={state.values.price}
          />
          {state.errors.price && (
            <p className="text-red-500">{state.errors.price}</p>
          )}
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="description">Description</label>
          <input
            className="outline outline-black rounded p-4"
            type="text"
            id="description"
            name="description"
            defaultValue={state.values.description}
          />
          {state.errors.description && (
            <p className="text-red-500">{state.errors.description}</p>
          )}
        </div>
        <div>
          <SubmitButton />
        </div>
      </form>
    </div>
  );
};

export default CreatePage;
