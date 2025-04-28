"use client";

import AddItemForm from "./components/add-item-form";

const AddItemPage = () => {
  return (
    <div className="flex flex-col gap-3 items-center p-4 mt-5">
      <div className="text-2xl font-thin">Add a new item</div>
      <AddItemForm />
    </div>
  );
};

export default AddItemPage;
