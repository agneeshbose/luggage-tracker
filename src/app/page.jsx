"use client";

import Button from "@/components/button";
import Link from "next/link";
import ItemList from "./components/item-list";

const LandingPage = () => {
  return (
    <div className="flex justify-center w-full">
      <div className="flex flex-col items-center mt-8 w-[500px] max-w-full">
        <div className="self-end py-2">
          <Link href="/add-item">
            <Button className="flex-1 bg-[#ca4574] font-thin">
              + New item
            </Button>
          </Link>
        </div>
        <ItemList />
      </div>
    </div>
  );
};

export default LandingPage;
