"use client";

import Button from "@/components/button";
import TextInput from "@/components/text-input";
import { useLocalStorage } from "@/hooks/use-local-storage";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const AddItemForm = () => {
  const router = useRouter();
  const localStorage = useLocalStorage();
  const [name, setName] = useState("");
  const [destination, setDestination] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);
    const items = localStorage.get("luggageItems") || [];
    const newList = [...items, { name, destination }];
    localStorage.set("luggageItems", newList);
    router.push("/");
  };

  return (
    <div className="w-[500px] rounded-[20px] bg-[linear-gradient(45deg,rgba(135,77,162,0.7)_0%,rgba(196,58,48,0.7)_100%)]">
      <form onSubmit={handleSubmit}>
        <div className="p-3 flex flex-col gap-3">
          <TextInput
            required
            value={name}
            label="Item name"
            onChange={(e) => setName(e.target.value)}
          />
          <TextInput
            required
            value={destination}
            label="Destination"
            onChange={(e) => setDestination(e.target.value)}
          />
          <div className="flex gap-4 mt-2">
            <Button
              onClick={() => router.push("/")}
              className="flex-1 bg-[#a9415b]"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              className="flex-1 bg-[#c63266]"
              loading={submitting}
            >
              Submit
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddItemForm;
